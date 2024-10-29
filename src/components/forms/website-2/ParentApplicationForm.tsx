import React from "react";
import { useFormik } from "formik";
import { InferType } from "yup";
import { ParentApplicationFormSchema } from "@/schema";
import { Value } from "react-phone-number-input";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { publicApiWebsite2 } from "@/server/req/requestApis";
import { ApplicantParentFormParams } from "@/types/server";
import CustomFormField, { FormFieldType } from "../CustomFormField";

import { FormProps } from "@/types";
import { REQUEST_ID_ERROR } from "@/constants/dashboard-index";
import ApplicationFormWrapper from "./ApplicationFormWrapper";
import "react-phone-number-input/style.css";

const ParentForm = ({ step, requestId, nextStep, prevStep }: FormProps) => {
	const applicantParentFormMutation = useMutation({
		mutationFn: (data: ApplicantParentFormParams) =>
			publicApiWebsite2.postNewAdmission(data),
		onError: (error) => {
			console.error("[Applicant Parent Form]", error);
			toast.error("Something went wrong");
		},
		onSuccess: (data: any) => {
			const { status } = data || {};
			if (!status) toast.warning(`${data?.message}`);
			if (status)
				toast.success(`${data?.message || "Form submitted successfully"}`);
		},
	});

	const onSubmit = async (
		values: InferType<typeof ParentApplicationFormSchema>
	) => {
		if (!requestId) {
			toast.error(REQUEST_ID_ERROR);
			return;
		}

		const data = {
			...values,
			page: step?.toString()!,
			request_id: requestId,
		};
		console.log("Form submitted", values, data);

		try {
			await applicantParentFormMutation.mutateAsync(data);
			nextStep && nextStep();
		} catch (error) {
			toast.error("An error occured");
		}
	};

	const {
		values,
		errors,
		touched,
		setFieldValue,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			applicant_father_name: "",
			applicant_mother_name: "",
			other_guardian_name: "",

			applicant_father_phone: "",
			applicant_mother_phone: "",
			other_guardian_phone: "",

			applicant_father_address: "",
			applicant_mother_address: "",
			other_guardian_address: "",

			parent_religion: "",
			parent_denomination: "",

			worship_address: "",
			religious_figure_name: "",
		},
		validationSchema: ParentApplicationFormSchema,
		onSubmit,
	});

	const fields = [
		{
			name: "applicant_father_name",
			label: "Name of parent (Father)",
			value: values.applicant_father_name,
			placeholder: "e.g Mr Tamar Guanah",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "applicant_father_phone",
			label: "Phone No",
			value: values.applicant_father_phone,
			placeholder: "",
			required: true,
			type: FormFieldType.PHONE_INPUT,
		},
		{
			name: "applicant_father_address",
			label: "Address",
			value: values.applicant_father_address,
			placeholder: "e.g Mile two signal Barracks",
			required: true,
			type: FormFieldType.INPUT,
		},

		{
			name: "applicant_mother_name",
			label: "Name of parent (Mother)",
			value: values.applicant_mother_name,
			placeholder: "e.g Mrs Tamar Guanah",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "applicant_mother_phone",
			label: "Phone No",
			value: values.applicant_mother_phone,
			placeholder: "",
			required: true,
			type: FormFieldType.PHONE_INPUT,
		},
		{
			name: "applicant_mother_address",
			label: "Address",
			value: values.applicant_mother_address,
			placeholder: "e.g Mile two signal Barracks",
			required: true,
			type: FormFieldType.INPUT,
		},

		{
			name: "other_guardian_name",
			label: "Name of guardian (if other than parent)",
			value: values.other_guardian_name,
			placeholder: "e.g Mr Tamar Guanah",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "other_guardian_phone",
			label: "Phone No",
			value: values.other_guardian_phone,
			placeholder: "",
			required: true,
			type: FormFieldType.PHONE_INPUT,
		},
		{
			name: "other_guardian_address",
			label: "Address",
			value: values.other_guardian_address,
			placeholder: "e.g Mile two signal Barracks",
			required: true,
			type: FormFieldType.INPUT,
		},

		{
			name: "parent_religion",
			label: "Religion of parent",
			value: values.parent_religion,
			placeholder: "e.g Christian/Muslim",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "parent_denomination",
			label: "Denomination",
			value: values.parent_denomination,
			placeholder: "e.g Pentecostal/Catholic",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "worship_address",
			label: "Present Parish/Mosque",
			value: values.worship_address,
			placeholder: "e.g Mile two signal Barracks",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "religious_figure_name",
			label: "Name of Priest or Imam",
			value: values.religious_figure_name,
			placeholder: "e.g Father/Imam Tamar Guanah",
			required: true,
			type: FormFieldType.INPUT,
		},
	];

	return (
		<ApplicationFormWrapper
			headerText="Parent/Guardian Information"
			step={step}
			prevStep={prevStep}
			onSubmit={handleSubmit}
			isSubmitting={applicantParentFormMutation.isPending}
		>
			<div className="flex-column sm:grid grid-cols-2 md:grid-cols-3 w-full gap-4 max-sm:gap-y-2">
				{fields?.map((row, index) => (
					<React.Fragment key={index}>
						{" "}
						{row.type === FormFieldType.INPUT && (
							<CustomFormField
								fieldType={FormFieldType.INPUT}
								name={row?.name}
								label={row?.label}
								field={{
									value: row?.value,
									placeholder: row?.placeholder,
								}}
								onChange={handleChange}
								onBlur={handleBlur}
								errors={errors}
								touched={touched}
								required
							/>
						)}
						{row.type === FormFieldType.PHONE_INPUT && (
							<CustomFormField
								fieldType={FormFieldType.PHONE_INPUT}
								name={row?.name}
								label={row?.label}
								field={{ value: row?.value }}
								onChange={(value: Value) => {
									setFieldValue(row?.name, value);
								}}
								onBlur={handleBlur}
								errors={errors}
								touched={touched}
							/>
						)}
					</React.Fragment>
				))}
			</div>
		</ApplicationFormWrapper>
	);
};

export default ParentForm;
