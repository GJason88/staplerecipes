import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

export const { get, put, post, delete: destroy } = apiClient;