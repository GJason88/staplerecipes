import { get, post, put, destroy } from './base';

export const recipesApi = {
  create: (data: RecipeState) => post('/recipe', data),
  retrieve: (id: string) => get(`/recipe/${id}`),
  retrieveAll: () => get('/recipes'),
  update: (id: string, data: RecipeState) => put(`/recipe/${id}`, data),
  delete: (id: string) => destroy(`/recipe/${id}`),
};

export const toolsApi = {
  createTool: (data: ToolState) => post('/tool', data),
  createCategory: (params: { name: string }) =>
    post('/tool/category', null, { params }),
  retrieveAllTools: () => get('/tools'),
  retrieveAllCategories: () => get('/tool/categories'),
  updateTool: (id: string, data: ToolState) => put(`/tool/${id}`, data),
  deleteTool: (id: string) => destroy(`/tool/${id}`),
  deleteCategory: (id: string) => destroy(`/tool/category/${id}`),
};

export const ingredientsApi = {
  createIngredient: (data: IngredientState) => post('/ingredient', data),
  createCategory: (params: { name: string }) =>
    post('/ingredient/category', null, { params }),
  retrieveAllIngredients: () => get('/ingredients'),
  retrieveAllCategories: () => get('/ingredient/categories'),
  updateIngredient: (id: string, data: IngredientState) =>
    put(`/ingredient/${id}`, data),
  deleteIngredient: (id: string) => destroy(`/ingredient/${id}`),
  deleteCategory: (id: string) => destroy(`/ingredient/category/${id}`),
  updateNutrition: (id: string, params: Array<NutrientState>) =>
    put(`/ingredient/nutrients/${id}`, null, { params }),
};

export const nutritionApi = {
  getNutrients: (byId: boolean) =>
    get('/nutrients', { params: { byId: byId } }),
};
