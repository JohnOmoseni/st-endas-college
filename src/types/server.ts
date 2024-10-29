export interface ContactUsType {
	email: string;
	name: string;
	message: string;
	subject?: string;
}

export interface RegisterSchoolType {
	email: string;
	name: string;
	acronym: string;
	phone: string;
	approx_staff_total: string | number;
	approx_student_total: string | number;
	address: string;
}

// WEBSITE 2 - TYPES
export interface ApplicantFormParams {
	page: string;
	request_id: string;
	applicant_name: string;
	applicant_gender: string;
	applicant_dob?: Date | string;
	applicant_last_school: string;
	applicant_fslc_year: string;
	applicant_present_class: string;
}

export interface ApplicantParentFormParams {
	page: string;
	request_id: string;
	applicant_father_name: string;
	applicant_father_address: string;
	applicant_father_phone: string;
	applicant_mother_name: string;
	applicant_mother_address: string;
	applicant_mother_phone: string;

	other_guardian_name: string;
	other_guardian_address: string;
	other_guardian_phone: string;

	parent_religion: string;
	parent_denomination: string;

	worship_address: string;
	religious_figure_name: string;
}

export interface ApplicantDocumentFormParams {
	page: string;
	request_id: string;
	applicant_passport: any;
	applicant_payment_proof: any;
	applicant_birth_cert: any;
	applicant_last_promotion_cert: any;
}
