import db from './db.configs.js';

export async function getAllRecipesQuery() {
    let response = {};
    const selectRecipesQuery = {
        text: 'SELECT id, name FROM recipes.recipe;',
    };
    try {
        response = await db.any(selectRecipesQuery);
    } catch (e) {
        throw new Error(e);
    }
    return response;
}

export async function createRecipeQuery(recipeInfo) {
    let response = {};
    const insertRecipeQuery = {
        text: 'INSERT INTO recipes.recipe(name, time, instructions) VALUES ($1, $2, $3) RETURNING id;',
        values: [recipeInfo.name, recipeInfo.time || null, recipeInfo.instructions || []],
    };
    try {
        response = await db.one(insertRecipeQuery.text, insertRecipeQuery.values);
    } catch (e) {
        throw new Error(e);
    }
    return response;
}
