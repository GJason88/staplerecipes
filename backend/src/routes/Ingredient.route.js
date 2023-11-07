import bodyParser from 'body-parser';
import { Router } from 'express';
import { ingredientController } from '../controllers/Ingredient.controller.js';

const ingredient = Router();
const jsonParser = bodyParser.json();

ingredient.get('/ingredient/categories', ingredientController.getCategories);

ingredient.get('/ingredient/:id', ingredientController.getIngredient);

ingredient.get('/ingredients', ingredientController.getIngredients);

ingredient.post('/ingredient', jsonParser, ingredientController.createIngredient);

ingredient.post('/ingredient/category', ingredientController.createCategory);

ingredient.put('/ingredient/nutrients/:id', ingredientController.updateNutrients);

ingredient.delete('/ingredient/:id', ingredientController.deleteIngredient);

ingredient.delete('/ingredient/category/:id', ingredientController.deleteCategory);

export default ingredient;
