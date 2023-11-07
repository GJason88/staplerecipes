import { ingredientHelpers } from '../helpers/Ingredient.helpers.js';
import { ingredientModel } from '../models/Ingredient.model.js';

export const ingredientController = {
    getIngredient: async (req, res) => {
        const ingredientId = req.params.id;
        if (!ingredientId) return res.status(400).send('No ID provided.');
        try {
            const jsonResponse =
                await ingredientModel.getIngredient(ingredientId);
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
    getIngredients: async (req, res) => {
        try {
            const jsonResponse = await ingredientModel.getIngredients();
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
    getCategories: async (req, res) => {
        try {
            const jsonResponse = await ingredientModel.getCategories();
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
    getNutrients: async (req, res) => {
        const ingredientId = req.params.id;
        if (!ingredientId) return res.status(400).send('No ID provided.');
        try {
            const jsonResponse = await ingredientModel.getNutrients();
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
    createIngredient: async (req, res) => {
        try {
            const info = req.body;
            if (!ingredientHelpers.validateCreateInfo(info))
                return res.status(400).send('Missing ingredient information.');
            await ingredientModel.createIngredient(info);
            res.send('success');
        } catch (e) {
            console.log(e);
            switch (e.code) {
                case '23505':
                    res.status(400).send('Ingredient with name already exists.');
                    break;
                default:
                    res.status(500).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
    createCategory: async (req, res) => {
        try {
            const categoryInfo = req.query;
            if (!categoryInfo || !categoryInfo.name)
                return res
                    .status(400)
                    .send('Create Category Entry requires name.');
            await ingredientModel.createCategory(categoryInfo);
            res.send('success');
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send('Category name already exists.');
                    break;
                default:
                    res.status(500).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
    updateNutrients: async (req, res) => {
        try {
            const ingredientId = req.params.id;
            const modifiedNutrients = req.body.modifiedNutrients;
            if (!(ingredientId && modifiedNutrients))
                return res.status(400).send('Invalid info.');
            await ingredientModel.updateNutrients(
                ingredientId,
                modifiedNutrients
            );
            res.send('success');
        } catch (e) {
            res.status(500).send('Something went wrong.');
            console.log(e);
        }
    },
    deleteIngredient: async (req, res) => {
        try {
            const ingredientId = req.params.id;
            if (!ingredientId) return res.status(400).send('No ID provided.');
            await ingredientModel.deleteIngredient(ingredientId);
            res.send('success');
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            if (!categoryId) {
                return res.status(400).send('No ID provided.');
            }
            await ingredientModel.deleteCategory(categoryId);
            res.send('success');
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
};
