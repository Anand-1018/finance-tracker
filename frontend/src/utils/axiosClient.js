import axios from "axios";

const baseURL = process.env.NODE_ENV === "development"
    ? process.env.VITE_REACT_APP_BACKEND_BASEURL  // local dev
    : process.env.REACT_APP_API_URL;               // production

export const axiosClient = axios.create({
    baseURL
});
