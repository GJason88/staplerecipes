import db from '../db.configs.js';

export async function getAllRecipesQuery() {
    const selectRecipesQuery = {
        text: 'SELECT recipe_id, recipe_name FROM recipes.recipe;',
    };
    return await db.any(selectRecipesQuery);
}

export async function createRecipeQuery(recipeInfo) {
    const insertRecipeQuery = {
        text: 'INSERT INTO recipes.recipe(recipe_name) VALUES ($1) RETURNING recipe_id;',
        values: [recipeInfo.name],
    };
    return await db.one(insertRecipeQuery.text, insertRecipeQuery.values);
}

export async function updateRecipeQuery(recipeId, recipeInfo) {
    const updateRecipeQueries = {
        text: 'UPDATE recipes.recipe SET recipe_name = $1, time = $2, instructions = $3 WHERE recipe_id = $4',
        values: [
            recipeInfo.name,
            recipeInfo.time || null,
            recipeInfo.instructions || [],
        ],
    };
    await db.none(updateRecipeQueries.text, updateRecipeQueries.values);
    updateTools(recipeId, recipeInfo.tools);
    updateIngredients(recipeId, recipeInfo.ingredients);
}

async function updateTools(recipeId, tools) {
    if (!tools) return;
    let rows = [];
    let values = [];
    tools.map((tool, index) => {
        rows.push(`(${recipeId}, $${++index})`);
        values.push(tool.tool_id);
    });
    const query = {
        text:
            'INSERT INTO recipes.recipe_tool(recipe_id, tool_id) VALUES' +
            rows +
            ';',
        values,
    };
    db.any(query.text, query.values);
}

async function updateIngredients(ingredients) {
    if (!ingredients) return;
}
