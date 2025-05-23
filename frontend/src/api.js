import axios from "axios";

// Set the base URL from the environment variable
const backendURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: backendURL.startsWith("http") ? backendURL : `https://${backendURL}`, // Set the backend URL once
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Automatically attach token (optional)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
