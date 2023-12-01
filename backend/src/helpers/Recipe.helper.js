import pgPromise from 'pg-promise';
import { reviewHelpers } from './Review.helper.js';
import {
    additionalMeasurementsQuery,
    nestSelectQuery,
    nutrientsSelectQuery,
} from './utils/nestedSelectQueries.js';
import { pgpHelpers } from './utils/pgpHelpers.js';

const pgp = pgPromise({ capSQL: true });

const queries = {
    selectRecipeIngredientsQuery: `coalesce(${nestSelectQuery(
        'array_to_json(array_agg(x))',
        `SELECT i.ingredient_id,ingredient_name,amount,default_measurement,g_ml AS ml_for_100g,${nutrientsSelectQuery},${additionalMeasurementsQuery} 
         FROM recipes.ingredient AS i
         INNER JOIN recipes.recipe_ingredient as ri ON i.ingredient_id = ri.ingredient_id AND r.recipe_id = ri.recipe_id`
    )}, '[]'::json) AS ingredients`,
    selectRecipeToolsQuery: `coalesce(${nestSelectQuery(
        'array_to_json(array_agg(x))',
        `SELECT t.tool_id,tool_name 
         FROM recipes.tool as t 
         INNER JOIN recipes.recipe_tool as rt ON t.tool_id = rt.tool_id AND r.recipe_id = rt.recipe_id`
    )}, '[]'::json) AS tools`,
    selectRecipeReviewsQuery: `coalesce(${nestSelectQuery(
        'array_to_json(array_agg(x))',
        `${reviewHelpers.getReviewsQuery} WHERE r.recipe_id = rr.recipe_id`
    )}, '[]'::json) AS reviews`,
    insertIngredientsQuery: (ingredients, recipeId) =>
        pgp.helpers.insert(
            ingredients.map((ingr) => ({
                ingredient_id: ingr.ingredientId,
                recipe_id: recipeId,
                amount: ingr.amount,
                default_measurement: ingr.defaultMeasurement,
            })),
            pgpHelpers.columns([
                'ingredient_id',
                'recipe_id',
                'amount',
                'default_measurement',
            ]),
            pgpHelpers.table('recipe_ingredient', 'recipes')
        ),
    insertToolsQuery: (tools, recipeId) =>
        pgp.helpers.insert(
            tools.map((tool) => ({
                tool_id: tool.toolId,
                recipe_id: recipeId,
            })),
            pgpHelpers.columns(['tool_id', 'recipe_id']),
            pgpHelpers.table('recipe_tool', 'recipes')
        ),
};

export const recipeHelpers = {
    validateInfo: (info) =>
        typeof info.recipeName === 'string' &&
        info.recipeName &&
        Array.isArray(info.tools) &&
        Array.isArray(info.ingredients) &&
        info.ingredients.length &&
        typeof info.diet === 'string' &&
        typeof info.servings === 'string' &&
        typeof info.time === 'string' &&
        Array.isArray(info.instructions) &&
        info.instructions,
    getRecipesQuery: `SELECT r.recipe_id,recipe_name,time,diet,servings,instructions,${queries.selectRecipeIngredientsQuery},${queries.selectRecipeToolsQuery},${queries.selectRecipeReviewsQuery} 
                      FROM recipes.recipe as r`,
    insertToolsAndIngredients: async (task, recipeId, ingredients, tools) => {
        await task.none(queries.insertIngredientsQuery(ingredients, recipeId));
        tools.length &&
            (await task.none(queries.insertToolsQuery(tools, recipeId)));
    },
};
