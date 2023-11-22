import db from '../configs/db.config.js';
import { toolCategorySelectQuery } from '../helpers/utils/nestedSelectQueries.js';

export const toolModel = {
    getTools: async () =>
        await db.any(
            `SELECT tool_id, tool_name, ${toolCategorySelectQuery} FROM recipes.tool as t;`
        ),
    getCategories: async () =>
        await db.any(
            'SELECT category_id, category_name FROM recipes.tool_category;'
        ),
    createTool: async (toolInfo) => {
        const query = toolInfo.toolId
            ? 'INSERT INTO recipes.tool(tool_id, tool_name, category_id) VALUES ($1, $2, $3);'
            : 'INSERT INTO recipes.tool(tool_name, category_id) VALUES ($1, $2);';
        await db.none(query, [
            ...(toolInfo.toolId ? [toolInfo.toolId] : []),
            toolInfo.toolName,
            toolInfo.category.categoryId,
        ]);
    },
    createCategory: async (categoryInfo) =>
        await db.none(
            'INSERT INTO recipes.tool_category(category_name) VALUES ($1);',
            [categoryInfo.name]
        ),
    updateTool: async (toolId, info) => {
        await toolModel.deleteTool(toolId);
        await toolModel.createTool(info); // includes old id
    },
    deleteTool: async (toolId) =>
        await db.none('DELETE FROM recipes.tool WHERE tool_id = $1;', [toolId]),
    deleteCategory: async (categoryInfo) =>
        await db.none(
            'DELETE FROM recipes.tool_category WHERE category_id = $1;',
            [categoryInfo.id]
        ),
};
