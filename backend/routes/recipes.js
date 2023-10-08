import { Router } from 'express';
import { createRecipeQuery, deleteRecipeQuery, getAllRecipesQuery, updateRecipeQuery } from '../queries/recipes.js';
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
            return res.status(400).send('No recipe info given.');
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
