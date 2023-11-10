import { toolModel } from '../models/Tool.model.js';

export const toolController = {
    getTools: async (req, res) => {
        try {
            const jsonResponse = await toolModel.getTools();
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
    getCategories: async (req, res) => {
        try {
            const jsonResponse = await toolModel.getCategories();
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
    createTool: async (req, res) => {
        try {
            const toolInfo = req.body;
            if (!toolInfo || !toolInfo.toolName || !toolInfo.categoryId)
                return res.status(400).send('Missing required info.');
            await toolModel.createTool(toolInfo);
            res.send('success');
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send('Tool name already exists.');
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
            await toolModel.createCategory(categoryInfo);
            res.send('success');
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send('Category name already exists.');
                    break;
                default:
                    res.status(400).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
    deleteTool: async (req, res) => {
        try {
            const toolInfo = req.params;
            if (!toolInfo || !toolInfo.id)
                return res.status(400).send('No tool to delete.');
            await toolModel.deleteTool(toolInfo);
            res.send('success');
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const categoryInfo = req.params;
            if (!categoryInfo || !categoryInfo.id) {
                return res.status(400).send('No category to delete.');
            }
            await toolModel.deleteCategory(categoryInfo);
            res.send('success');
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
};
