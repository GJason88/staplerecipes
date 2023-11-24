import bodyParser from 'body-parser';
import { Router } from 'express';
import { recipeController } from '../controllers/Recipe.controller.js';
import { adminAuth } from '../middlewares/authorization.middleware.js';

const recipe = Router();
const jsonParser = bodyParser.json();

recipe.get('/recipes', recipeController.getRecipes);

recipe.get('/recipe/:id', recipeController.getRecipe);

recipe.post('/admin/recipe', jsonParser, recipeController.createRecipe);

recipe.put('/admin/recipe/:id', jsonParser, recipeController.updateRecipe);

recipe.delete('/admin/recipe/:id', recipeController.deleteRecipe);

export default recipe;
