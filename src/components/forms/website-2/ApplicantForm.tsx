import { useFormik } from "formik";
import { InferType } from "yup";
import { ApplicantFormSchema } from "@/schema";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { publicApiWebsite2 } from "@/server/req/requestApis";
import { ApplicantFormParams } from "@/types/server";
import { SelectItem } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/_components/Calendar";
import { format } from "date-fns";
import { FormProps } from "@/types";

import CustomFormField, { FormFieldType } from "../CustomFormField";
import ApplicationFormWrapper from "./ApplicationFormWrapper";
import { REQUEST_ID_ERROR } from "@/constants/dashboard-index";

type FormFieldsProps = {
	name: string;
	label: string;
	value: any;
	placeholder: string;
	required?: boolean;
	type?: FormFieldType;
	options?: { label: string; value: string }[];
};

const ApplicantForm = ({ step, nextStep, requestId }: FormProps) => {
	const applicantFormMutation = useMutation({
		mutationFn: (data: ApplicantFormParams) =>
			publicApiWebsite2.postNewAdmission(data),
		onError: (error) => {
			console.error("[Applicant Form]", error);
			toast.error("An issue was encountered sending message. Please try again");
		},
		onSuccess: (data: any) => {
			const { status } = data || {};
			if (!status) toast.warning(`${data?.message}`);
			if (status)
				toast.success(`${data?.message || "Form submitted successfully"}`);
		},
	});

	const onSubmit = async (values: InferType<typeof ApplicantFormSchema>) => {
		if (!requestId) {
			toast.error(REQUEST_ID_ERROR);
			return;
		}

		const data = {
			...values,
			applicant_dob: format(values.applicant_dob, "dd-MM-yyyy"),
			page: step?.toString()!,
			request_id: requestId,
		};

		try {
			await applicantFormMutation.mutateAsync(data);
			nextStep && nextStep();
		} catch (error) {
			toast.error("An error occured");
		}
	};

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		setFieldValue,
		handleSubmit,
	} = useFormik({
		initialValues: {
			applicant_name: "",
			applicant_gender: "" as any,
			applicant_dob: "" as any,
			applicant_last_school: "",
			applicant_fslc_year: "",
			applicant_present_class: "",
		},
		validationSchema: ApplicantFormSchema,
		onSubmit,
	});

	const fields = [
		[
			{
				name: "applicant_name",
				label: "Name of applicant",
				value: values.applicant_name,
				placeholder: "e.g Tamar Guanah",
				required: true,
			},

			{
				name: "applicant_gender",
				label: "Sex",
				value: values.applicant_gender,
				placeholder: "e.g Male or female",
				required: true,
				type: FormFieldType.SELECT as any,
				options: [
					{ value: "male", label: "Male" },
					{ value: "female", label: "Female" },
				],
			},
			{
				name: "applicant_dob",
				label: "Date of birth",
				value: values.applicant_dob,
				placeholder: "DD/MM/YYYY",
				type: FormFieldType.SKELETON,
			},
		],
		[
			{
				name: "applicant_last_school",
				label: "Name of last school attended",
				value: values.applicant_last_school,
				placeholder: "e.g Model high secondary school",
				required: true,
			},
			{
				name: "applicant_fslc_year",
				label: "Year obtained or will obtain first school leaving certificate",
				value: values.applicant_fslc_year,
				placeholder: "e.g Primary school or junior waec certificate",
				type: FormFieldType.INPUT as any,
				required: true,
			},

			{
				name: "applicant_present_class",
				label: "Present class",
				value: values.applicant_present_class,
				placeholder: "e.g JS. 1",
			},
		],
	];

	return (
		<ApplicationFormWrapper
			headerText="Applicant Information"
			step={step}
			isSubmitting={applicantFormMutation.isPending}
			onSubmit={handleSubmit}
		>
			{fields?.map((row: FormFieldsProps[], idx) => (
				<div
					key={idx}
					className="sm:row-flex-start flex-column w-full gap-x-4 
			gap-y-4"
				>
					<CustomFormField
						fieldType={FormFieldType.INPUT}
						name={row[0]?.name}
						label={row[0]?.label}
						field={{
							value: row[0]?.value,
							placeholder: row[0]?.placeholder,
						}}
						onChange={handleChange}
						onBlur={handleBlur}
						errors={errors}
						touched={touched}
						required
					/>

					<CustomFormField
						fieldType={row[1]?.type!}
						name={row[1]?.name}
						label={row[1]?.label}
						field={{
							value: row[1]?.value,
							placeholder: row[1]?.placeholder,
						}}
						onChange={(value: any) => {
							row[1]?.type === FormFieldType.SELECT
								? setFieldValue(row[1]?.name, value)
								: handleChange({
										target: {
											name: row[1]?.name,
											value: value?.target.value,
										},
								  });
						}}
						onBlur={handleBlur}
						errors={errors}
						touched={touched}
						required
					>
						{row[1]?.type === FormFieldType.SELECT &&
							row[1]?.options?.map((item, index) => (
								<SelectItem
									key={index}
									value={item?.value}
									className="shad-select-item"
								>
									{item?.label}
								</SelectItem>
							))}
					</CustomFormField>

					{row[2]?.type === FormFieldType.SKELETON ? (
						<CustomFormField
							fieldType={FormFieldType.SKELETON}
							name={row[2]?.name}
							label={row[2]?.label}
							field={{
								value: row[2]?.value,
								placeholder: row[2]?.placeholder,
							}}
							onChange={handleChange}
							onBlur={handleBlur}
							errors={errors}
							touched={touched}
							required
							renderSkeleton={() => {
								return (
									<DatePicker
										onChange={(date: Date) => {
											console.log("[DATE]", format(date, "dd-MM-yyyy"));
											setFieldValue(row[2]?.name, date);
										}}
									/>
								);
							}}
						/>
					) : (
						<CustomFormField
							fieldType={FormFieldType.INPUT}
							name={row[2]?.name}
							label={row[2]?.label}
							field={{
								value: row[2]?.value,
								placeholder: row[2]?.placeholder,
							}}
							onChange={handleChange}
							onBlur={handleBlur}
							errors={errors}
							touched={touched}
							required
						/>
					)}
				</div>
			))}
		</ApplicationFormWrapper>
	);
};

export default ApplicantForm;
