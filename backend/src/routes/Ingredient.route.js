import bodyParser from 'body-parser';
import { Router } from 'express';
import { ingredientController } from '../controllers/Ingredient.controller.js';
import { adminAuth } from '../middlewares/authorization.middleware.js';

const ingredient = Router();
const jsonParser = bodyParser.json();

ingredient.get('/ingredient/categories', ingredientController.getCategories);

ingredient.get('/ingredient/:id', ingredientController.getIngredient);

ingredient.get('/ingredients', ingredientController.getIngredients);

ingredient.post('/ingredient', adminAuth, jsonParser, ingredientController.createIngredient);

ingredient.post('/ingredient/category', adminAuth, ingredientController.createCategory);

ingredient.put('/ingredient/:id', jsonParser, adminAuth, ingredientController.updateIngredient);

ingredient.put('/ingredient/nutrients/:id', adminAuth, ingredientController.updateNutrients);

ingredient.delete('/ingredient/:id', adminAuth, ingredientController.deleteIngredient);

ingredient.delete('/ingredient/category/:id', adminAuth, ingredientController.deleteCategory);

export default ingredient;
