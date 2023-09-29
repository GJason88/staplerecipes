/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

export const { get, put, post, delete: destroy } = apiClient;
