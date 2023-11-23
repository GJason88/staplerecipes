import { get, post, put, destroy } from './base';

const getHeaders = (token: string) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

export const recipesApi = {
  create: (data: RecipeState, token: string) =>
    post('/recipe', data, { headers: getHeaders(token) }),
  retrieve: (id: string) => get(`/recipe/${id}`),
  retrieveAll: () => get('/recipes'),
  update: (id: string, data: RecipeState, token: string) =>
    put(`/recipe/${id}`, data, { headers: getHeaders(token) }),
  delete: (id: string, token: string) =>
    destroy(`/recipe/${id}`, { headers: getHeaders(token) }),
};

export const toolsApi = {
  createTool: (data: ToolState, token: string) =>
    post('/tool', data, { headers: getHeaders(token) }),
  createCategory: (params: { name: string }, token: string) =>
    post('/tool/category', null, { params, headers: getHeaders(token) }),
  retrieveAllTools: () => get('/tools'),
  retrieveAllCategories: () => get('/tool/categories'),
  updateTool: (id: string, data: ToolState, token: string) =>
    put(`/tool/${id}`, data, { headers: getHeaders(token) }),
  deleteTool: (id: string, token: string) =>
    destroy(`/tool/${id}`, { headers: getHeaders(token) }),
  deleteCategory: (id: string, token: string) =>
    destroy(`/tool/category/${id}`, { headers: getHeaders(token) }),
};

export const ingredientsApi = {
  createIngredient: (data: IngredientState, token: string) =>
    post('/ingredient', data, { headers: getHeaders(token) }),
  createCategory: (params: { name: string }, token: string) =>
    post('/ingredient/category', null, { params, headers: getHeaders(token) }),
  retrieveAllIngredients: () => get('/ingredients'),
  retrieveAllCategories: () => get('/ingredient/categories'),
  updateIngredient: (id: string, data: IngredientState, token: string) =>
    put(`/ingredient/${id}`, data, { headers: getHeaders(token) }),
  deleteIngredient: (id: string, token: string) =>
    destroy(`/ingredient/${id}`, { headers: getHeaders(token) }),
  deleteCategory: (id: string, token: string) =>
    destroy(`/ingredient/category/${id}`, { headers: getHeaders(token) }),
};

export const nutritionApi = {
  getNutrients: (byId: boolean) =>
    get('/nutrients', { params: { byId: byId } }),
};
