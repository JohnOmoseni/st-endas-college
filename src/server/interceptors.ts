import axios from "axios";
import { API_DOMAIN, API_DOMAIN_WEBSITE_2 } from "./apiUrls";

const api = axios.create({
	baseURL: API_DOMAIN,
});

export const api_website_2 = axios.create({
	baseURL: API_DOMAIN_WEBSITE_2,
});

export default api;
