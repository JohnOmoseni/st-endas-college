import { useFormik } from "formik";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { publicApiWebsite2 } from "@/server/req/requestApis";
import { DocumentApplicationFormSchema } from "@/schema";
import { InferType } from "yup";
import { FormProps } from "@/types";
import { REQUEST_ID_ERROR } from "@/constants/dashboard-index";
import { convertToFormData } from "@/utils";
import FileUpload from "./FileUpload";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import ApplicationFormWrapper from "./ApplicationFormWrapper";

const DocumentForm = ({ step, nextStep, requestId, prevStep }: FormProps) => {
	const applicantDocumetFormMutation = useMutation({
		mutationFn: (data: FormData) => publicApiWebsite2.postNewAdmission(data),
		onError: (error) => {
			console.error("[Applicant Document Form]", error);
			toast.error("An issue was encountered sending message. Please try again");
		},
		onSuccess: (data: any) => {
			const { status } = data || {};
			if (!status) toast.warning(`${data?.message}`);
			if (status)
				toast.success(`${data?.message || "Form submitted successfully"}`);
		},
	});

	const onSubmit = async (
		values: InferType<typeof DocumentApplicationFormSchema>
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

		const formData = convertToFormData(data);

		try {
			await applicantDocumetFormMutation.mutateAsync(formData);
			nextStep && nextStep();
		} catch (error) {
			toast.error("An error occured");
		}
	};

	const { errors, touched, setFieldValue, handleBlur, handleSubmit } =
		useFormik({
			initialValues: {
				applicant_passport: "",
				applicant_payment_proof: "",
				applicant_last_promotion_cert: "",
				applicant_birth_cert: "",
			},
			validationSchema: DocumentApplicationFormSchema,
			onSubmit,
		});

	return (
		<ApplicationFormWrapper
			headerText="Document Upload"
			prevStep={prevStep}
			step={step}
			onSubmit={handleSubmit}
			isSubmitting={applicantDocumetFormMutation.isPending}
		>
			<div className="flex-column sm:grid grid-cols-2 w-full gap-4">
				<CustomFormField
					fieldType={FormFieldType.SKELETON}
					name="applicant_passport"
					errors={errors}
					onBlur={handleBlur}
					touched={touched}
					renderSkeleton={() => (
						<FileUpload
							title="Upload Passport"
							name="applicant_passport"
							required
							onFileChange={(file) => {
								setFieldValue("applicant_passport", file);
							}}
						/>
					)}
				/>

				<CustomFormField
					fieldType={FormFieldType.SKELETON}
					name="applicant_payment_proof"
					errors={errors}
					onBlur={handleBlur}
					touched={touched}
					renderSkeleton={() => (
						<FileUpload
							title="Upload Proof of Payment"
							name="applicant_payment_proof"
							required
							onFileChange={(file) => {
								setFieldValue("applicant_payment_proof", file);
							}}
						/>
					)}
				/>
			</div>

			<CustomFormField
				fieldType={FormFieldType.SKELETON}
				name="applicant_last_promotion_cert"
				errors={errors}
				onBlur={handleBlur}
				touched={touched}
				renderSkeleton={() => (
					<FileUpload
						title="Upload Testimonial or First school leaving certificate (if available)"
						name="applicant_last_promotion_cert"
						onFileChange={(file) => {
							setFieldValue("applicant_last_promotion_cert", file);
						}}
					/>
				)}
			/>

			<CustomFormField
				fieldType={FormFieldType.SKELETON}
				name="applicant_birth_cert"
				errors={errors}
				onBlur={handleBlur}
				touched={touched}
				renderSkeleton={() => (
					<FileUpload
						title="Upload Birth Certificate"
						name="applicant_birth_cert"
						onFileChange={(file) => {
							setFieldValue("applicant_birth_cert", file);
						}}
					/>
				)}
			/>
		</ApplicationFormWrapper>
	);
};

export default DocumentForm;
