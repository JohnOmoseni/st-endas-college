import * as yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

const FILE_SIZE = 4 * 1024 * 1024;

export const ContactSchema2 = yup.object().shape({
  name: yup.string().required("Field is required"),
  email: yup.string().email("Invalid email address").required("Field is required"),
  message: yup
    .string()
    .min(6, "Message must be at least 6 characters")
    .required("Field is required"),
});

// WEBSITE 2 --------------------------------------------------------------

export const ApplicantFormSchema = yup.object().shape({
  applicant_name: yup
    .string()
    .min(6, "Name must be at least 6 characters")
    .required("Field is required"),
  applicant_gender: yup
    .string()
    .oneOf(["male", "female"], "Please select a valid gender")
    .nullable()
    .required("Gender is required"),
  applicant_dob: yup
    .date()
    .nullable()
    .typeError("Please enter a valid date")
    .max(new Date(), "Date of birth cannot be today or in the future") // Check that date is not today or in the future
    .required("Date of birth is required"),
  applicant_last_school: yup.string().required("Field is required"),
  applicant_fslc_year: yup.string().required("Field is required"),
  applicant_present_class: yup.string().required("Field is required"),
});

export const ParentApplicationFormSchema = yup.object().shape({
  applicant_father_name: yup.string().required("Field is required"),
  applicant_mother_name: yup.string().required("Field is required"),
  other_guardian_name: yup.string().required("Field is required"),

  applicant_father_phone: yup
    .string()
    .test(
      "is-valid-phone",
      "Please enter a valid phone number",
      (value) => isValidPhoneNumber(value!, "NG") // Validate if it's a valid Nigerian phone number
    )
    .required("Phone number is required"),
  applicant_mother_phone: yup
    .string()
    .test("is-valid-phone", "Please enter a valid phone number", (value) =>
      isValidPhoneNumber(value!, "NG")
    )
    .required("Phone number is required"),
  other_guardian_phone: yup
    .string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
    .required("Phone number is required"),

  applicant_father_address: yup.string().required("Field is required"),
  applicant_mother_address: yup.string().required("Field is required"),
  other_guardian_address: yup.string().required("Field is required"),

  parent_religion: yup.string().required("Field is required"),
  parent_denomination: yup.string().required("Field is required"),

  religious_figure_name: yup.string().required("Field is required"),
  worship_address: yup.string().required("Field is required"),
});

export const DocumentApplicationFormSchema = yup.object().shape({
  applicant_passport: yup
    .mixed()
    .required("Passport is required")
    .test(
      "fileType",
      "Only image files are allowed",
      (value: any) => value && ["image/jpeg", "image/png", "image/gif"].includes(value.type) // Accept only images
    )
    .test(
      "fileSize",
      "File size must be less than 4MB",
      (value: any) => value && value.size <= FILE_SIZE
    ),
  applicant_payment_proof: yup
    .mixed()
    .required("Proof of Payment is required")
    .test(
      "fileSize",
      "File size must be less than 4MB",
      (value: any) => value && value.size <= FILE_SIZE
    ),
  applicant_birth_cert: yup
    .mixed()
    .required("Birth Certificate is required")
    .test(
      "fileSize",
      "File size must be less than 4MB",
      (value: any) => value && value.size <= FILE_SIZE
    ),
  applicant_last_promotion_cert: yup
    .mixed()
    .required("Field is required")
    .test(
      "fileSize",
      "File size must be less than 4MB",
      (value: any) => value && value.size <= FILE_SIZE
    ),
});
