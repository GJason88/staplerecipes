import {
  NutritionState,
  UpdateRecipeParams,
} from '../../features/recipepage/recipeReducer';
import { get, post, put, destroy } from './base';

export const recipesApi = {
  create: (params: { name: string }) => post('/recipe', null, { params }),
  retrieve: (id: string) => get(`/recipe/${id}`),
  retrieveAll: () => get('/recipes'),
  update: (id: string, params: UpdateRecipeParams) =>
    put(`/recipe/${id}`, null, { params }),
  delete: (id: string) => destroy(`/recipe/${id}`),
};

export const toolsApi = {
  createTool: (params: { name: string }) => post('/tool', null, { params }),
  createCategory: (params: { name: string }) =>
    post('/tool/category', null, { params }),
  retrieveAllTools: () => get('/tools'),
  retrieveAllCategories: () => get('/tool/categories'),
  deleteTool: (id: string) => destroy(`/tool/${id}`),
  deleteCategory: (id: string) => destroy(`/tool/category/${id}`),
};

export const ingredientsApi = {
  createIngredient: (params: { name: string }) =>
    post('/ingredient', null, { params }),
  createCategory: (params: { name: string }) =>
    post('/ingredient/category', null, { params }),
  retrieveAllIngredients: () => get('/ingredients'),
  retrieveAllCategories: () => get('/ingredient/categories'),
  deleteIngredient: (id: string) => destroy(`/ingredient/${id}`),
  deleteCategory: (id: string) => destroy(`/ingredient/category/${id}`),
  updateNutrition: (id: string, params: NutritionState) =>
    put(`/ingredient/nutrition/${id}`, null, { params }),
};
