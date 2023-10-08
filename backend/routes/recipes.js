import { Router } from 'express';
import {
    createRecipeQuery,
    deleteRecipeQuery,
    getAllRecipesQuery,
    getRecipeQuery,
    updateRecipeQuery,
} from '../queries/recipes.js';
import { getAllHelper } from './helpers.js';

const recipes = Router();

recipes.get('/recipes/all', async (req, res) =>
    getAllHelper(req, res, getAllRecipesQuery)
);

recipes.get('/recipes/:id', async (req, res) => {
    try {
        const recipeId = req.params?.id;
        if (!recipeId) {
            return res.status(400).send('Invalid recipe info.');
        }
        const jsonResponse = await getRecipeQuery(recipeId);
        if (jsonResponse[0].length === 0) {
            return res.status(400).send(`No recipe with ID ${recipeId}`);
        }
        const ingredients = jsonResponse[1].map(
            ({ ingredient_id, ingredient_name, amount }) => ({ ingredient_id, ingredient_name, amount })
        );
        // calculate nutrition
        const nutrition = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            fiber: 0,
        };
        jsonResponse[1].forEach((ingredient) => {
            for (const key in nutrition) {
                nutrition[key] += ingredient[key]
                    ? ingredient[key] * parseInt(ingredient.amount)
                    : 0;
            }
        });
        const recipeInfo = {
            ...jsonResponse[0][0],
            ingredients: ingredients,
            tools: jsonResponse[2],
            nutrition: nutrition,
        };
        res.json(recipeInfo);
    } catch (e) {
        switch (e.code) {
            case '23505':
                res.status(400).send('Recipe does not exist.');
                break;
            default:
                res.status(500).send('Server error.');
                console.log(e);
                break;
        }
    }
});

recipes.post('/recipes', async (req, res) => {
    try {
        const recipeInfo = req.query;
        if (!recipeInfo || !recipeInfo.name)
            return res.status(400).send('Invalid recipe info.');
        const jsonResponse = await createRecipeQuery(recipeInfo);
        res.json(jsonResponse);
    } catch (e) {
        switch (e.code) {
            case '23505':
                res.status(400).send('Recipe name already exists.');
                break;
            default:
                res.status(500).send('Server error.');
                console.log(e);
                break;
        }
    }
});

recipes.put('/recipes/:id', async (req, res) => {
    try {
        const recipeInfo = req.query;
        const recipeId = req.params?.id;
        if (!recipeId || !recipeInfo || !recipeInfo.name)
            return res.status(400).send('Invalid recipe info.');
        await updateRecipeQuery(recipeId, recipeInfo);
        res.send('success');
    } catch (e) {
        switch (e.code) {
            case '23505':
                res.status(400).send('Recipe does not exist.');
                break;
            default:
                res.status(500).send('Server error.');
                console.log(e);
                break;
        }
    }
});

recipes.delete('/recipes/:id', async (req, res) => {
    try {
        const recipeInfo = req.params;
        if (!recipeInfo || !recipeInfo.id)
            return res.status(400).send('Invalid recipe info.');
        await deleteRecipeQuery(recipeInfo.id);
        res.send('success');
    } catch (e) {
        switch (e.code) {
            case '23505':
                res.status(400).send('Recipe does not exist.');
                break;
            default:
                res.status(500).send('Server error.');
                console.log(e);
                break;
        }
    }
});

export default recipes;
