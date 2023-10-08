import db from '../db.configs.js';

export async function getAllRecipesQuery() {
    const selectRecipesQuery = {
        text: 'SELECT recipe_id, recipe_name FROM recipes.recipe;',
    };
    return await db.any(selectRecipesQuery);
}

export async function getRecipeQuery(recipeId) {
    const selectRecipeQuery = {
        text: 'SELECT recipe_id, recipe_name, time, instructions FROM recipes.recipe WHERE recipe_id = $1;' +
              'SELECT i.ingredient_id, ingredient_name, amount, calories, protein, carbs, fat, fiber \
               FROM recipes.ingredient AS i \
               INNER JOIN recipes.recipe_ingredient AS ri \
               ON i.ingredient_id = ri.ingredient_id AND ri.recipe_id = $1;' +
               'SELECT t.tool_id, tool_name, category_id \
               FROM recipes.tool AS t \
               INNER JOIN recipes.recipe_tool AS rt \
               ON t.tool_id = rt.tool_id AND rt.recipe_id = $1;',
        values: [recipeId]
    };
    return await db.multi(selectRecipeQuery.text, selectRecipeQuery.values);
}

export async function createRecipeQuery(recipeInfo) {
    const insertRecipeQuery = {
        text: 'INSERT INTO recipes.recipe(recipe_name, time, instructions) VALUES ($1, $2, $3) RETURNING recipe_id;',
        values: [recipeInfo.name, '', []],
    };
    return await db.one(insertRecipeQuery);
}

export async function updateRecipeQuery(recipeId, recipeInfo) {
    const updateRecipeQueries = {
        text: 'UPDATE recipes.recipe SET recipe_name = $1, time = $2, instructions = $3 WHERE recipe_id = $4',
        values: [
            recipeInfo.name,
            recipeInfo.time || '',
            recipeInfo.instructions || [],
            recipeId
        ],
    };
    await db.none(updateRecipeQueries);
    updateToolsQuery(recipeId, recipeInfo.tools);
    updateIngredientsQuery(recipeId, recipeInfo.ingredients);
}

async function updateToolsQuery(recipeId, tools) {
    if (!tools) return;
    let rows = [];
    let values = [recipeId];
    let toolIdPlaceholder = 2;
    tools.map((tool) => {
        rows.push(`(${recipeId}, $${toolIdPlaceholder++})`);
        values.push(tool.toolId);
    });
    const query = {
        text:
            'DELETE FROM recipes.recipe_tool WHERE recipe_id = $1;' +
            'INSERT INTO recipes.recipe_tool(recipe_id, tool_id) VALUES' +
            rows +
            ';',
        values,
    };
    db.none(query.text, query.values);
}

async function updateIngredientsQuery(recipeId, ingredients) {
    if (!ingredients) return;
    let rows = [];
    let values = [recipeId];
    let ingrIdPlaceholder = 0;
    let amountPlaceholder = 1;
    ingredients.map((ingredient) => {
        rows.push(`(${recipeId}, $${ingrIdPlaceholder += 2}, $${amountPlaceholder += 2})`);
        values.push(ingredient.ingredientId);
        values.push(ingredient.amount);
    });
    const query = {
        text:
            'DELETE FROM recipes.recipe_ingredient WHERE recipe_id = $1;' + 
            'INSERT INTO recipes.recipe_ingredient(recipe_id, ingredient_id, amount) VALUES' + rows + ';',
        values,
    };
    db.none(query.text, query.values);
}

export async function deleteRecipeQuery(recipeId) {
    const updateRecipeQueries = {
        text: 'DELETE FROM recipes.recipe WHERE recipe_id = $1;',
        values: [recipeId]
    };
    await db.none(updateRecipeQueries);
}
