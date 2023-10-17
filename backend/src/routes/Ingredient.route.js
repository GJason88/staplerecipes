import { Router } from 'express';
import { ingredientController } from '../controllers/Ingredient.controller.js';
import { ingredientModel } from '../models/Ingredient.model.js';

const ingredient = Router();
ingredient.get('/ingredient/:id', ingredientController.getIngredient);

ingredient.get('/ingredients', ingredientController.getIngredients);

ingredient.get('/ingredient/categories', ingredientController.getCategories);

ingredient.post('/ingredient', ingredientController.createIngredient);

ingredient.post('/ingredient/category', ingredientController.createCategory);

ingredient.put('/ingredient/nutrition/:id', ingredientController.updateNutrition);

ingredient.delete('/ingredient/:id', ingredientModel.deleteIngredient);

ingredient.delete('/ingredient/category/:id', ingredientController.deleteCategory);

export default ingredient;
