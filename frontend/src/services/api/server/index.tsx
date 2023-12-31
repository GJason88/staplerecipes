import { get, post, put, destroy } from './base';

const getHeaders = (token: string) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

export const recipesApi = {
  create: (data: RecipeState, token: string) =>
    post('/admin/recipe', data, { headers: getHeaders(token) }),
  retrieve: (id: string) => get(`/recipe/${id}`),
  retrieveAll: () => get('/recipes'),
  update: (id: string, data: RecipeState, token: string) =>
    put(`/admin/recipe/${id}`, data, { headers: getHeaders(token) }),
  delete: (id: string, token: string) =>
    destroy(`/admin/recipe/${id}`, { headers: getHeaders(token) }),
};

export const reviewsApi = {
  create: (recipeId: string, data: ReviewState, token: string) =>
    post(`/recipe/${recipeId}/review`, data, { headers: getHeaders(token) }),
  retrieve: (recipeId: string, token: string) =>
    get(`/recipe/${recipeId}/review`, { headers: getHeaders(token) }),
  update: (recipeId: string, data: ReviewState, token: string) =>
    put(`/recipe/${recipeId}/review`, data, { headers: getHeaders(token) }),
  delete: (recipeId: string, token: string) =>
    destroy(`/recipe/${recipeId}/review`, { headers: getHeaders(token) }),
};

export const toolsApi = {
  createTool: (data: ToolState, token: string) =>
    post('/admin/tool', data, { headers: getHeaders(token) }),
  createCategory: (params: { name: string }, token: string) =>
    post('/admin/tool/category', null, { params, headers: getHeaders(token) }),
  retrieveAllTools: () => get('/tools'),
  retrieveAllCategories: () => get('/tool/categories'),
  updateTool: (id: string, data: ToolState, token: string) =>
    put(`/admin/tool/${id}`, data, { headers: getHeaders(token) }),
  deleteTool: (id: string, token: string) =>
    destroy(`/admin/tool/${id}`, { headers: getHeaders(token) }),
  deleteCategory: (id: string, token: string) =>
    destroy(`/admin/tool/category/${id}`, { headers: getHeaders(token) }),
};

export const ingredientsApi = {
  createIngredient: (data: IngredientState, token: string) =>
    post('/admin/ingredient', data, { headers: getHeaders(token) }),
  createCategory: (params: { name: string }, token: string) =>
    post('/admin/ingredient/category', null, {
      params,
      headers: getHeaders(token),
    }),
  retrieveAllIngredients: () => get('/ingredients'),
  retrieveAllCategories: () => get('/ingredient/categories'),
  updateIngredient: (id: string, data: IngredientState, token: string) =>
    put(`/admin/ingredient/${id}`, data, { headers: getHeaders(token) }),
  deleteIngredient: (id: string, token: string) =>
    destroy(`/admin/ingredient/${id}`, { headers: getHeaders(token) }),
  deleteCategory: (id: string, token: string) =>
    destroy(`/admin/ingredient/category/${id}`, { headers: getHeaders(token) }),
};

export const nutritionApi = {
  getNutrients: (byId: boolean) =>
    get('/nutrients', { params: { byId: byId } }),
};
