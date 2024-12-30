// src/services/itemService/index.js
import { axiosInstance } from "../axiosInstance/index";

export const getItensByRestaurante = async (restauranteId) => {
  try {
    const response = await axiosInstance.get(
      `/restaurante/${restauranteId}/Item`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    throw error;
  }
};

export const getItemById = async (restauranteId, itemId) => {
  try {
    const response = await axiosInstance.get(
      `/restaurante/${restauranteId}/Item/${itemId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar item:", error);
    throw error;
  }
};

export const createItem = async (restauranteId, data) => {
  try {
    const response = await axiosInstance.post(
      `/restaurante/${restauranteId}/Item`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar item:", error);
    throw error;
  }
};
