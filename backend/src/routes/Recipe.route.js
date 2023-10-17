import { Router } from 'express';
import { recipeController } from '../controllers/Recipe.controller.js';

const recipe = Router();

recipe.get('/recipes', recipeController.getRecipes);

recipe.get('/recipe/:id', recipeController.getRecipe);

recipe.post('/recipe', recipeController.createRecipe);

recipe.put('/recipe/:id', recipeController.updateRecipe);

recipe.delete('/recipe/:id', recipeController.deleteRecipe);

export default recipe;
