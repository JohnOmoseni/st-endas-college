import { ApplicantDocumentFormParams } from "@/types/server";

export const handleApiError = (error: any, message?: string) => {
	console.error(`API Error - ${message}:`, error);
	if (error.response) {
		// Server returned a responnse not in the 200 range
		console.error("Response data:", error.response.data);
		console.error("Response status:", error.response.status);
	} else if (error.request) {
		console.error("Request data:", error.request);
	} else {
		// No response from server - 404
		console.error("Error message:", error.message);
	}
	throw error;
};

export const wait = (ms: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

// Utility function to convert ApplicantDocumentFormParams to FormData
export function convertToFormData(data: ApplicantDocumentFormParams): FormData {
	const formData = new FormData();

	formData.append("page", data.page);
	formData.append("request_id", data.request_id);
	formData.append("applicant_passport", data.applicant_passport);
	formData.append("applicant_payment_proof", data.applicant_payment_proof);
	formData.append("applicant_birth_cert", data.applicant_birth_cert);
	formData.append(
		"applicant_last_promotion_cert",
		data.applicant_last_promotion_cert
	);

	return formData;
}
