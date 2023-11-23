import bodyParser from 'body-parser';
import { Router } from 'express';
import { recipeController } from '../controllers/Recipe.controller.js';
import { adminAuth } from '../middlewares/authorization.middleware.js';

const recipe = Router();
const jsonParser = bodyParser.json();

recipe.get('/recipes', recipeController.getRecipes);

recipe.get('/recipe/:id', recipeController.getRecipe);

recipe.post('/recipe', adminAuth, jsonParser, recipeController.createRecipe);

recipe.put('/recipe/:id', adminAuth, jsonParser, recipeController.updateRecipe);

recipe.delete('/recipe/:id', adminAuth, recipeController.deleteRecipe);

export default recipe;
