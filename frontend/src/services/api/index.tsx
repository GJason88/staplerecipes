import { get, post, put, destroy } from './base';

export const api = {
  index: () => get('/'),
  create: (params) => post(`/recipes`, null, { params }),
  retrieve: (id) => get(`/recipes/${id}`),
  retrieveAll: () => get('/allRecipes'),
  update: (id, params) => put(`/recipes/${id}`, params),
  delete: (id) => destroy(`/recipes/${id}`),
};
