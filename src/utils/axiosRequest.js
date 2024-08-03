import axios from "axios";
const axiosRequest = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
})

export default axiosRequest