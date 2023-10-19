import { recipeHelpers } from '../helpers/Recipe.helpers.js';
import { recipeModel } from '../models/Recipe.model.js';

export const recipeController = {
    getRecipes: async (req, res) => {
        try {
            const jsonResponse = await recipeModel.getRecipes();
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
    getRecipe: async (req, res) => {
        try {
            const recipeId = req.params?.id;
            if (!recipeId) {
                return res.status(400).send('Invalid recipe info.');
            }
            const jsonResponse = await recipeModel.getRecipe(recipeId);
            if (jsonResponse[0].length === 0) {
                return res.status(400).send(`No recipe with ID ${recipeId}`);
            }
            const [ info, ingredients, tools ] = jsonResponse;
            res.json({
                ...info[0],
                ingredients: ingredients,
                tools: tools,
            });
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send('Recipe does not exist.');
                    break;
                default:
                    res.status(500).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
    createRecipe: async (req, res) => {
        try {
            const info = req.body;
            if (!recipeHelpers.containsAllInfo(info))
                return res.status(400).send('Invalid recipe info.');
            const jsonResponse = await recipeModel.createRecipe(info);
            res.json(jsonResponse);
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send('Recipe name already exists.');
                    break;
                default:
                    res.status(500).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
    updateRecipe: async (req, res) => {
        try {
            const recipeInfo = req.query;
            const recipeId = req.params?.id;
            if (!recipeId || !recipeInfo || !recipeInfo.name)
                return res.status(400).send('Invalid recipe info.');
            await recipeModel.updateRecipe(recipeId, recipeInfo);
            res.send('success');
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send('Recipe does not exist.');
                    break;
                default:
                    res.status(500).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
    deleteRecipe: async (req, res) => {
        try {
            const recipeInfo = req.params;
            if (!recipeInfo || !recipeInfo.id)
                return res.status(400).send('Invalid recipe info.');
            await recipeModel.deleteRecipe(recipeInfo.id);
            res.send('success');
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send('Recipe does not exist.');
                    break;
                default:
                    res.status(500).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
};
