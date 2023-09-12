import { get, post, put, destroy } from './base';

export const api = {
  index: () => get('/'),
  create: (params) => post('/recipes', params),
  retrieve: (id) => get(`/recipes/${id}`),
  update: (id, params) => put(`/recipes/${id}`, params),
  delete: (id) => destroy(`/recipes/${id}`),
};
