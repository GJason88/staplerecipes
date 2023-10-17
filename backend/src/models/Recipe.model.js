import db from '../configs/db.configs.js';

export const recipeModel = {
    getRecipes: async () =>
        await db.any('SELECT recipe_id, recipe_name FROM recipes.recipe;'),
    getRecipe: async (recipeId) =>
        await db.multi(
            'SELECT recipe_id, recipe_name, time, instructions FROM recipes.recipe WHERE recipe_id = $1;' +
                'SELECT i.ingredient_id, ingredient_name, amount, calories, protein, carbs, fat, fiber \
        FROM recipes.ingredient AS i \
        INNER JOIN recipes.recipe_ingredient AS ri \
        ON i.ingredient_id = ri.ingredient_id AND ri.recipe_id = $1;' +
                'SELECT t.tool_id, tool_name, category_id \
        FROM recipes.tool AS t \
        INNER JOIN recipes.recipe_tool AS rt \
        ON t.tool_id = rt.tool_id AND rt.recipe_id = $1;',
            [recipeId]
        ),
    createRecipe: async (recipeInfo) =>
        await db.one(
            'INSERT INTO recipes.recipe(recipe_name, time, instructions) VALUES ($1, $2, $3) RETURNING recipe_id;',
            [recipeInfo.name, '', []]
        ),
    updateRecipe: async (recipeId, recipeInfo) => { // Have frontend send changes (diff fields in recipe, tools and ingredients to delete and add)
        updateRecipeTools(recipeId, recipeInfo.tools);
        updateRecipeIngredients(recipeId, recipeInfo.ingredients);
        await db.none(
            'UPDATE recipes.recipe SET recipe_name = $1, time = $2, instructions = $3 WHERE recipe_id = $4;',
            [
                recipeInfo.name,
                recipeInfo.time || '',
                recipeInfo.instructions || [],
                recipeId,
            ]
        );
    },
    deleteRecipe: async (recipeId) =>
        await db.none('DELETE FROM recipes.recipe WHERE recipe_id = $1;', [recipeId]),
};

const updateRecipeTools = async (recipeId, tools) => {
    if (!tools) return;
    let rows = [];
    let values = [recipeId];
    let toolIdPlaceholder = 2;
    tools.map((tool) => {
        rows.push(`(${recipeId}, $${toolIdPlaceholder++})`);
        values.push(tool.toolId);
    });
    await db.none( // TODO: use insert helper pg-promise for parameterized inputs, or use parameter for recipeId instead of passing directly
        'DELETE FROM recipes.recipe_tool WHERE recipe_id = $1; \
        INSERT INTO recipes.recipe_tool(recipe_id, tool_id) VALUES' +
            rows +
            ';',
        values
    );
};

const updateRecipeIngredients = async (recipeId, ingredients) => {
    if (!ingredients) return;
    let rows = [];
    let values = [recipeId];
    let ingrIdPlaceholder = 0;
    let amountPlaceholder = 1;
    ingredients.map((ingredient) => {
        rows.push(
            `(${recipeId}, $${(ingrIdPlaceholder += 2)}, $${(amountPlaceholder += 2)})`
        );
        values.push(ingredient.ingredientId);
        values.push(ingredient.amount);
    });
    await db.none( // TODO: use insert helper pg promise for parameterized inputs
        'DELETE FROM recipes.recipe_ingredient WHERE recipe_id = $1; \
        INSERT INTO recipes.recipe_ingredient(recipe_id, ingredient_id, amount) VALUES' +
            rows +
            ';',
        values
    );
};
