import { toolHelpers } from '../helpers/tool.helper.js';
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
            if (!toolHelpers.validateCreateInfo(toolInfo))
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
    updateTool: async (req, res) => {
        try {
            const info = req.body;
            const toolId = req.params?.id;
            if (!toolId) return res.status(400).send('No tool id provided.');
            if (!toolHelpers.validateCreateInfo(info))
                return res.status(400).send('Invalid tool update info.');
            await toolModel.updateTool(toolId, info);
            res.send('success');
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send('Tool does not exist.');
                    break;
                default:
                    res.status(500).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
    deleteTool: async (req, res) => {
        try {
            const toolId = req.params?.id;
            if (!toolId) return res.status(400).send('No tool id provided.');
            await toolModel.deleteTool(toolId);
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
