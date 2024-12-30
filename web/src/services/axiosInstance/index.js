// src/services/axiosInstance/index.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api",
  timeout: 10000, // Timeout de 10 segundos
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para lidar com erros
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na requisição Axios:", error);
    return Promise.reject(error);
  }
);
