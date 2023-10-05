import { Router } from 'express';
import { createRecipeQuery, getAllRecipesQuery } from '../queries/recipes.js';
import { getAllHelper } from './helpers.js';

const recipes = Router();

recipes.get('/recipes/all', async (req, res) => getAllHelper(req, res, getAllRecipesQuery));

recipes.get('/recipes/:id', async (req, res) => {
    console.log(req.params);
    res.send('done');
    // try {
    //     if (!req.params || !req.params.id) throw new Error('Missing ID');
    //     const jsonResponse = getRecipeQuery(req.params.id);
    //     res.json(jsonResponse);
    // } catch (e) {
    //     console.log(e);
    //     res.status(400).send(e);
    // }
});

recipes.post('/recipes', async (req, res) => {
    try {
        const recipeInfo = req.query;
        if (!recipeInfo || !recipeInfo.name)
            return res.status(400).send('Create Recipe Entry requires name.');
        const jsonResponse = await createRecipeQuery(recipeInfo);
        res.json(jsonResponse);
    } catch (e) {
        let message = '';
        switch (e.code) {
            case '23505':
                message = 'Recipe name already exists.';
                break;
            default:
                message = 'Unknown error.';
                console.log(e);
                break;
        }
        res.status(400).send(message);
    }
});

recipes.put('/recipes/:id', async (req, res) => {
    const recipeInfo = req.query;
    if (!recipeInfo)
        return res.status(400).send('No recipe info given.');
    if (!recipeInfo.name)
        return res.status(400).send('Name cannot be empty.');
    res.send('update console log');
});

export default recipes;
