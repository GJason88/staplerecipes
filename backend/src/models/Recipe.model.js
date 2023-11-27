import pgPromise from 'pg-promise';
import db from '../configs/db.config.js';
import { pgpHelpers } from '../helpers/utils/pgpHelpers.js';
import { recipeHelpers } from '../helpers/Recipe.helper.js';

const pgp = pgPromise({ capSQL: true });

export const recipeModel = {
    getRecipes: async () => await db.any(`${recipeHelpers.getRecipesQuery};`),
    getRecipe: async (recipeId) =>
        await db.oneOrNone(`${recipeHelpers.getRecipesQuery} WHERE recipe_id = $1;`, [
            recipeId,
        ]),
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
        info.tools.length &&
            (await db.none(
                pgp.helpers.insert(
                    info.tools.map((tool) => ({
                        tool_id: tool.toolId,
                        recipe_id: recipeId,
                    })),
                    pgpHelpers.columns(['tool_id', 'recipe_id']),
                    pgpHelpers.table('recipe_tool', 'recipes')
                )
            ));
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
