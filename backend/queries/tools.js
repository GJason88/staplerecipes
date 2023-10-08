import db from '../db.configs.js';

export async function getAllToolsQuery() {
    const selectCategoriesQuery = {
        text: 'SELECT tool_id, tool_name, category_id FROM recipes.tool;',
    };
    return await db.any(selectCategoriesQuery);
}

export async function getAllCategoriesQuery() {
    const selectCategoriesQuery = {
        text: 'SELECT category_id, category_name FROM recipes.tool_category;',
    };
    return await db.any(selectCategoriesQuery);
}

export async function createToolQuery(toolInfo) {
    const insertToolQuery = {
        text: 'INSERT INTO recipes.tool(tool_name, category_id) VALUES ($1, $2);',
        values: [toolInfo.name, parseInt(toolInfo.category)],
    };
    return await db.none(insertToolQuery.text, insertToolQuery.values);
}

export async function createCategoryQuery(categoryInfo) {
    const insertCategoryQuery = {
        text: 'INSERT INTO recipes.tool_category(category_name) VALUES ($1);',
        values: [categoryInfo.name],
    };
    return await db.none(insertCategoryQuery.text, insertCategoryQuery.values);
}

export async function deleteToolQuery(toolInfo) {
    const deleteToolQuery = {
        text: 'DELETE FROM recipes.tool WHERE tool_id = $1;',
        values: [toolInfo.id]
    };
    return await db.none(deleteToolQuery.text, deleteToolQuery.values);
}

export async function deleteCategoryQuery(categoryInfo) {
    const deleteCategoryQuery = {
        text: 'DELETE FROM recipes.tool_category WHERE category_id = $1;',
        values: [categoryInfo.id]
    };
    return await db.none(deleteCategoryQuery.text, deleteCategoryQuery.values);
}
