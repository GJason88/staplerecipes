import db from '../configs/db.configs.js';

export const toolModel = {
    getTools: async () =>
        await db.any(
            `SELECT tool_id, tool_name, category_name FROM recipes.tool as t
             INNER JOIN recipes.tool_category as tc ON t.category_id = tc.category_id;`
        ),
    getCategories: async () =>
        await db.any(
            'SELECT category_id, category_name FROM recipes.tool_category;'
        ),
    createTool: async (toolInfo) =>
        await db.none(
            'INSERT INTO recipes.tool(tool_name, category_id) VALUES ($1, $2);',
            [toolInfo.name, parseInt(toolInfo.category)]
        ),
    createCategory: async (categoryInfo) =>
        await db.none(
            'INSERT INTO recipes.tool_category(category_name) VALUES ($1);',
            [categoryInfo.name]
        ),
    deleteTool: async (toolInfo) =>
        await db.none('DELETE FROM recipes.tool WHERE tool_id = $1;', [
            toolInfo.id,
        ]),
    deleteCategory: async (categoryInfo) =>
        await db.none(
            'DELETE FROM recipes.tool_category WHERE category_id = $1;',
            [categoryInfo.id]
        ),
};
