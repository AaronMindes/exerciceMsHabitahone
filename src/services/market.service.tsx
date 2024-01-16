import axios from 'axios';
import { API_URL_MARKET_LIST } from '../configs/config';

const apiService = axios.create();

export const marketListService = {
  getProduits: async () => {
    try {
      const response = await apiService.get(`${API_URL_MARKET_LIST}/products`);
      return response.data;
    } catch (error) {
      console.error('Error get products', error);
      throw error;
    }
  }
};

export {};
