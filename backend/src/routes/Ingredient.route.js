import bodyParser from 'body-parser';
import { Router } from 'express';
import { ingredientController } from '../controllers/Ingredient.controller.js';

const ingredient = Router();
const jsonParser = bodyParser.json();

ingredient.get('/ingredient/categories', ingredientController.getCategories);

ingredient.get('/ingredient/:id', ingredientController.getIngredient);

ingredient.get('/ingredients', ingredientController.getIngredients);

ingredient.post('/admin/ingredient', jsonParser, ingredientController.createIngredient);

ingredient.post('/admin/ingredient/category', ingredientController.createCategory);

ingredient.put('/admin/ingredient/:id', jsonParser, ingredientController.updateIngredient);

ingredient.put('/admin/ingredient/nutrients/:id', ingredientController.updateNutrients);

ingredient.delete('/admin/ingredient/:id', ingredientController.deleteIngredient);

ingredient.delete('/admin/ingredient/category/:id', ingredientController.deleteCategory);

export default ingredient;
