import { UpdateRecipeParams } from '../../redux/components/recipes/recipeReducer';
import { get, post, put, destroy } from './base';

export const recipesApi = {
  create: (params: { name: string }) => post('/recipes', null, { params }),
  retrieve: (id: string) => get(`/recipes/${id}`),
  retrieveAll: () => get('/recipes/all'),
  update: (id: string, params: UpdateRecipeParams) =>
    put(`/recipes/${id}`, null, { params }),
  delete: (id: string) => destroy(`/recipes/${id}`),
};

export const toolsApi = {
  createTool: (params: { name: string }) => post('/tools', null, { params }),
  createCategory: (params: { name: string }) =>
    post('/tools/categories', null, { params }),
  retrieve: (id: string) => get(`/tools/${id}`),
  retrieveAllTools: () => get('/tools/all'),
  retrieveAllCategories: () => get('/tools/categories/all'),
  deleteTool: (id: string) => destroy(`/tools/${id}`),
  deleteCategory: (id: string) => destroy(`/tools/categories/${id}`),
};
