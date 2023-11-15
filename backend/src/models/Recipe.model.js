import pgPromise from 'pg-promise';
import db from '../configs/db.configs.js';
import {
    additionalMeasurementsQuery,
    nutrientsSelectQuery,
    nestSelectQuery,
} from '../helpers/utils/nestedSelectQueries.js';
import { pgpHelpers } from '../helpers/utils/pgpHelpers.js';

const pgp = pgPromise({ capSQL: true });

export const recipeModel = {
    getRecipes: async () => {
        const ingredientsQuery = `coalesce(${nestSelectQuery(
            'array_to_json(array_agg(x))',
            `SELECT i.ingredient_id,ingredient_name,amount,default_measurement,g_ml AS ml_for_100g,${nutrientsSelectQuery},${additionalMeasurementsQuery} 
             FROM recipes.ingredient AS i
             INNER JOIN recipes.recipe_ingredient as ri ON i.ingredient_id = ri.ingredient_id AND r.recipe_id = ri.recipe_id`
        )}, '[]'::json) AS ingredients`;
        const toolsQuery = `coalesce(${nestSelectQuery(
            'array_to_json(array_agg(x))',
            `SELECT t.tool_id,tool_name 
             FROM recipes.tool as t
             INNER JOIN recipes.recipe_tool as rt ON t.tool_id = rt.tool_id AND r.recipe_id = rt.recipe_id`
        )}, '[]'::json) AS tools`;
        const recipesQuery = `SELECT r.recipe_id,recipe_name,time,diet,servings,instructions,${ingredientsQuery},${toolsQuery} FROM recipes.recipe as r;`;
        return await db.any(recipesQuery);
    },
    getRecipe: async (recipeId) => {
        // TODO: use same format as getRecipes
        const recipeQuery =
            'SELECT recipe_id,recipe_name,time,diet,servings,instructions FROM recipes.recipe WHERE recipe_id = $1;';
        const ingredientsQuery = `SELECT i.ingredient_id,ingredient_name,amount,default_measurement,g_ml AS ml_for_100g,${nutrientsSelectQuery},${additionalMeasurementsQuery}
            FROM recipes.ingredient AS i \
            INNER JOIN recipes.recipe_ingredient AS r_i ON i.ingredient_id = r_i.ingredient_id AND r_i.recipe_id = $1;`;
        const toolsQuery =
            'SELECT t.tool_id,tool_name FROM recipes.tool AS t \
            INNER JOIN recipes.recipe_tool AS rt ON t.tool_id = rt.tool_id AND rt.recipe_id = $1;';
        return await db.multi(recipeQuery + ingredientsQuery + toolsQuery, [
            recipeId,
        ]);
    },
    createRecipe: async (info) => {
        const recipeQuery = info.recipeId
            ? 'INSERT INTO recipes.recipe(recipe_id, recipe_name, time, diet, servings, instructions) VALUES ($1, $2, $3, $4, $5, $6) RETURNING recipe_id;'
            : 'INSERT INTO recipes.recipe(recipe_name, time, diet, servings, instructions) VALUES ($1, $2, $3, $4, $5) RETURNING recipe_id;';
        const { recipe_id: recipeId } = await db.one(recipeQuery, [
            ...(info.recipeId ? [info.recipeId] : []),
            info.recipeName,
            info.time,
            info.diet,
            info.servings,
            info.instructions,
        ]);
        await db.none(
            pgp.helpers.insert(
                info.ingredients.map((ingr) => ({
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
            )
        );
        info.tools.length && await db.none(
            pgp.helpers.insert(
                info.tools.map((tool) => ({
                    tool_id: tool.toolId,
                    recipe_id: recipeId,
                })),
                pgpHelpers.columns(['tool_id', 'recipe_id']),
                pgpHelpers.table('recipe_tool', 'recipes')
            )
        );
    },
    deleteRecipe: async (recipeId) =>
        await db.none('DELETE FROM recipes.recipe WHERE recipe_id = $1;', [
            recipeId,
        ]),
    updateRecipe: async (recipeId, info) => {
        await recipeModel.deleteRecipe(recipeId);
        await recipeModel.createRecipe(info); // includes old id
    },
};
