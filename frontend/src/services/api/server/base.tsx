/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export const { get, put, post, delete: destroy } = apiClient;
