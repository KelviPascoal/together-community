import axios from 'axios';
import { apiConfig } from '@/config/api';

export const api = axios.create(apiConfig);

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Adicionar token de autenticação se existir
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirecionar para login ou limpar autenticação
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    }
    return Promise.reject(error);
  }
);
