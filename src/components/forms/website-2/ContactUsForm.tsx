import { useState } from "react";
import { useFormik } from "formik";
import { InferType } from "yup";
import { ContactSchema2 } from "@/schema";
import { Envelope } from "@/constants/icons";
import { useMutation } from "@tanstack/react-query";
import { publicApiWebsite2 } from "@/server/req/requestApis";
import { toast } from "sonner";

import { ContactUsType } from "@/types/server";
import { Button } from "@/components/CustomButton";
import CustomFormField, { FormFieldType } from "../CustomFormField";

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const contactMutation = useMutation({
    mutationFn: (data: ContactUsType) => publicApiWebsite2.postContactUs(data),
    onError: (error) => {
      console.error("Contact error", error);
      toast.error("An issue was encountered sending message. Please try again");
    },
    onSuccess: (data: any) => {
      const { status } = data || {};
      if (!status) {
        toast.warning(`${data?.message}`);
        return;
      }
      if (status) toast.success(`Message sent successfully`);
    },
  });

  const onSubmit = async (values: InferType<typeof ContactSchema2>) => {
    setIsLoading(true);
    try {
      const data = {
        email: values.email,
        name: values.name,
        message: values.message,
      };

      contactMutation.mutate(data);
    } catch (error) {
      toast.error("An issue was encountered sending message. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema2,
    onSubmit,
  });

  return (
    <div className="flex-column gap-8">
      <div className="w-full">
        <h3 className="text-2xl md:text-3xl">Contact Us</h3>

        <p className="max-w-[60ch] mt-0.5 text-[1.03rem] font-medium leading-6">
          Have Questions? Get in Touch with Us Now!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex-column w-full flex-1 gap-6 ">
        <div className="flex-column w-full gap-3">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            name="name"
            label="Full Name"
            field={{ value: values.name, placeholder: "" }}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
            required
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            name="email"
            label="Email Address"
            field={{
              value: values.email,
              placeholder: "Your email",
              type: "email",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            iconSrc={Envelope}
            required
            touched={touched}
          />

          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            name="message"
            label="Message"
            field={{
              value: values.message,
              placeholder: "Enter message",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>

        <Button
          type="submit"
          title={isLoading ? "Submitting..." : "Send"}
          className="!mt-auto !w-full !py-6"
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
