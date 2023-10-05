import { Router } from 'express';
import { createCategoryQuery, createToolQuery, deleteCategoryQuery, deleteToolQuery, getAllCategoriesQuery, getAllToolsQuery } from '../queries/tools.js';
import { getAllHelper } from './helpers.js';

const tools = Router();

tools.get('/tools/all', (req, res) => getAllHelper(req, res, getAllToolsQuery));

tools.get('/tools/categories/all', (req, res) => getAllHelper(req, res, getAllCategoriesQuery));

tools.post('/tools', async (req, res) => {
    try {
        const toolInfo = req.query;
        if (!toolInfo || !toolInfo.name)
            return res.status(400).send('Create Tool Entry requires name.');
        await createToolQuery(toolInfo);
        res.send('success');
    } catch (e) {
        switch (e.code) {
            case '23505':
                res.status(400).send('Tool name already exists.');
                break;
            default:
                res.status(500).send('Server error.');
                console.log(e);
                break;
        }
    }
});

tools.post('/tools/categories', async (req, res) => {
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

tools.delete('/tools/:id', async (req, res) => {
    try {
        const toolInfo = req.params;
        if (!toolInfo || !toolInfo.id)
            return res.status(400).send('No tool to delete.');
        await deleteToolQuery(toolInfo);
        res.send('success');
    } catch (e) {
        console.log(e);
        res.status(500).send('failure');
    }
});

tools.delete('/tools/categories/:id', async (req, res) => {
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

export default tools;
