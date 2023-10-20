import pgPromise from 'pg-promise';
import db from '../configs/db.configs.js';
import {
    additionalMeasurementsQuery,
    nutrientsSelectQuery,
} from '../helpers/utils/nestedSelectQueries.js';
import { mapFields } from '../helpers/utils/mapFields.js';

const pgp = pgPromise({ capSQL: true });

export const recipeModel = {
    getRecipes: async () =>
        await db.any('SELECT recipe_id, recipe_name FROM recipes.recipe;'),
    getRecipe: async (recipeId) => {
        const recipeQuery =
            'SELECT recipe_id,recipe_name,time,diet,instructions FROM recipes.recipe WHERE recipe_id = $1;';
        const ingredientsQuery = `SELECT i.ingredient_id,ingredient_name,amount,default_measurement,g_ml AS ml_for_100g,${nutrientsSelectQuery},${additionalMeasurementsQuery}
            FROM recipes.ingredient AS i \
            INNER JOIN recipes.recipe_ingredient AS r_i ON i.ingredient_id = r_i.ingredient_id AND r_i.recipe_id = $1;`;
        const toolsQuery =
            'SELECT t.tool_id,tool_name,category_id FROM recipes.tool AS t \
            INNER JOIN recipes.recipe_tool AS rt ON t.tool_id = rt.tool_id AND rt.recipe_id = $1;';
        return await db.multi(recipeQuery + ingredientsQuery + toolsQuery, [
            recipeId,
        ]);
    },
    createRecipe: async (info) => {
        const recipeId = await db.one(
            'INSERT INTO recipes.recipe(recipe_name, time, diet, instructions) VALUES ($1, $2, $3) RETURNING recipe_id;',
            [info.name, info.time, info.diet, info.instructions]
        );
        await db.none(
            pgp.helpers.insert(
                info.ingredients.map((id) => ({
                    ingredient_id: id,
                    recipe_id: recipeId,
                })),
                null,
                'recipes.recipe_ingredient'
            )
        );
        await db.none(
            pgp.helpers.insert(
                info.tools.map((id) => ({
                    tool_id: id,
                    recipe_id: recipeId,
                })),
                null,
                'recipes.recipe_tool'
            )
        );
    },
    updateRecipe: async (recipeId, info) => {
        info.recipeFields &&
            db.none(
                pgp.helpers.update(
                    mapFields(info.recipeFields),
                    null,
                    'recipes.recipe'
                )
            );
        info.addIngredients?.length &&
            db.none(
                pgp.helpers.insert(
                    info.addIngredients.map((ingredient) => ({
                        recipe_id: recipeId,
                        ...mapFields(ingredient),
                    })),
                    [
                        'recipe_id',
                        'ingredient_id',
                        'amount',
                        'default_measurement',
                    ],
                    'recipes.recipe_ingredient'
                )
            );
        info.addTools?.length &&
            db.none(
                pgp.helpers.insert(
                    info.addTools.map((toolId) => ({
                        tool_id: toolId,
                        recipe_id: 5,
                    })),
                    ['tool_id', 'recipe_id'],
                    'recipes.recipe_tool'
                )
            );
        info.removeIngredients?.length &&
            db.none(
                'DELETE FROM recipes.recipe_ingredient WHERE ingredient_id IN ($1) AND recipe_id = $2',
                [info.removeIngredients, recipeId]
            );
        info.removeTools?.length &&
            db.none(
                'DELETE FROM recipes.recipe_tool WHERE tool_id IN ($1) AND recipe_id = $2',
                [info.removeTools, recipeId]
            );
    },
    deleteRecipe: async (recipeId) =>
        await db.none('DELETE FROM recipes.recipe WHERE recipe_id = $1;', [
            recipeId,
        ]),
};
