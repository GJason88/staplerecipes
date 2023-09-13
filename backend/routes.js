import express from 'express';
import { createRecipeQuery, getAllRecipesQuery } from './queries.js';

const router = express.Router();

router.get('/recipes/:id', async (req, res) => {
    console.log(req.params);
    res.send("done");
    // try {
    //     if (!req.params || !req.params.id) throw new Error('Missing ID');
    //     const jsonResponse = getRecipeQuery(req.params.id);
    //     res.json(jsonResponse);
    // } catch (e) {
    //     console.log(e);
    //     res.status(400).send(e);
    // }
});

router.get('/allRecipes', async (req, res) => {
    try {       
        const jsonResponse = await getAllRecipesQuery();
        res.json(jsonResponse);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

router.post('/recipes', async (req, res) => {
    try {
        const recipeInfo = req.query;
        if (!recipeInfo || !recipeInfo.name) throw new Error('Create Recipe requires name');
        const jsonResponse = await createRecipeQuery(recipeInfo);
        res.json(jsonResponse);
    }
    catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

export default router;
