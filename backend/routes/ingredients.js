import { Router } from 'express';
import { getAllHelper } from './helpers.js';
import {
    createCategoryQuery,
    createIngredientQuery,
    deleteCategoryQuery,
    deleteIngredientQuery,
    getAllCategoriesQuery,
    getAllIngredientsQuery,
} from '../queries/ingredients.js';

const ingredients = Router();

ingredients.get('/ingredients/all', (req, res) =>
    getAllHelper(req, res, getAllIngredientsQuery)
);

ingredients.get('/ingredients/categories/all', (req, res) =>
    getAllHelper(req, res, getAllCategoriesQuery)
);

ingredients.post('/ingredients', async (req, res) => {
    try {
        const ingrInfo = req.query;
        if (!ingrInfo || !ingrInfo.name)
            return res.status(400).send('Create Ingredient Entry requires name.');
        await createIngredientQuery(ingrInfo);
        res.send('success');
    } catch (e) {
        switch (e.code) {
            case '23505':
                res.status(400).send('Ingredient name already exists.');
                break;
            default:
                res.status(500).send('Server error.');
                console.log(e);
                break;
        }
    }
});

ingredients.post('/ingredients/categories', async (req, res) => {
    try {
        const categoryInfo = req.query;
        if (!categoryInfo || !categoryInfo.name)
            return res.status(400).send('Create Category Entry requires name.');
        await createCategoryQuery(categoryInfo);
        res.send('success');
    } catch (e) {
        switch (e.code) {
            case '23505':
                res.status(400).send('Category name already exists.');
                break;
            default:
                res.status(400).send('Server error.');
                console.log(e);
                break;
        }
    }
});

ingredients.delete('/ingredients/:id', async (req, res) => {
    try {
        const ingrInfo = req.params;
        if (!ingrInfo || !ingrInfo.id)
            return res.status(400).send('No ingredient to delete.');
        await deleteIngredientQuery(ingrInfo);
        res.send('success');
    } catch (e) {
        console.log(e);
        res.status(500).send('failure');
    }
});

ingredients.delete('/ingredients/categories/:id', async (req, res) => {
    try {
        const categoryInfo = req.params;
        if (!categoryInfo || !categoryInfo.id) {
            return res.status(400).send('No category to delete.');
        }
        await deleteCategoryQuery(categoryInfo);
        res.send('success');
    } catch (e) {
        console.log(e);
        res.status(500).send('failure');
    }
});

export default ingredients;
