// src/services/restauranteService/index.js
import { axiosInstance } from "../axiosInstance/index";

export const getRestaurantes = async () => {
  try {
    const response = await axiosInstance.get("/restaurante");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar restaurantes:", error);
    throw error;
  }
};

export const getRestauranteById = async (id) => {
  try {
    const response = await axiosInstance.get(`/restaurante/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar restaurante:", error);
    throw error;
  }
};

export const createRestaurante = async (data) => {
  try {
    const response = await axiosInstance.post("/restaurante", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar restaurante:", error);
    throw error;
  }
};
