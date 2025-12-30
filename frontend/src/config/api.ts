const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const apiConfig = {
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};
