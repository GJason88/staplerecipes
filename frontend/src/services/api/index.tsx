import { RecipeState } from '../../redux/components/recipes/recipeReducer';
import { get, post, put, destroy } from './base';

export const api = {
  index: () => get('/'),
  create: (params: { name: string }) => post(`/recipes`, null, { params }),
  retrieve: (id: string) => get(`/recipes/${id}`),
  retrieveAll: () => get('/allRecipes'),
  update: (id: string, params: RecipeState) => put(`/recipes/${id}`, params),
  delete: (id: string) => destroy(`/recipes/${id}`),
};
