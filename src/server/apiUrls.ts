export const API_DOMAIN =
	import.meta.env.VITE_API_ENDPOINT || "http://localhost:3000";

export const API_DOMAIN_WEBSITE_2 =
	import.meta.env.VITE_API_ENDPOINT_WEBSITE_2 || "http://localhost:3000";

if (!API_DOMAIN) {
	throw new Error("API_DOMAIN is not defined in the environment variables.");
}

export default {
	// WEBSITE 1 ----------------------------------------------------------------
	// Auth Requests
	LOGIN: `${API_DOMAIN}/auth/login`,

	// POST Requests
	REGISTERSCHOOL: `${API_DOMAIN}/api/schoolsignup`,
	CONTACTUS: `${API_DOMAIN}/api/contactus`,

	// WEBSITE 2 --------------------------------------------------------------
	GET_NEW_ADMISSION: `${API_DOMAIN_WEBSITE_2}/newadmission`,

	POST_NEW_ADMISSION: `${API_DOMAIN_WEBSITE_2}/newadmission`,
};
