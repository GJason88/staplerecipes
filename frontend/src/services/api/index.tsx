import {
  NutritionState,
  UpdateRecipeParams,
} from '../../redux/components/recipes/recipeReducer';
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
  retrieveAllTools: () => get('/tools/all'),
  retrieveAllCategories: () => get('/tools/categories/all'),
  deleteTool: (id: string) => destroy(`/tools/${id}`),
  deleteCategory: (id: string) => destroy(`/tools/categories/${id}`),
};

export const ingredientsApi = {
  createIngredient: (params: { name: string }) =>
    post('/ingredients', null, { params }),
  createCategory: (params: { name: string }) =>
    post('/ingredients/categories', null, { params }),
  retrieveAllIngredients: () => get('/ingredients/all'),
  retrieveAllCategories: () => get('/ingredients/categories/all'),
  deleteIngredient: (id: string) => destroy(`/ingredients/${id}`),
  deleteCategory: (id: string) => destroy(`/ingredients/categories/${id}`),
  updateNutrition: (id: string, params: NutritionState) =>
    put(`/ingredients/nutrition/${id}`, null, { params }),
};
