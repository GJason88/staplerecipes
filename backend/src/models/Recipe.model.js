import { recipeHelpers } from '../helpers/Recipe.helper.js';
import { adminDb, userDB } from '../configs/db.config.js';

export const recipeModel = {
    getRecipes: async () =>
        await userDB.any(`${recipeHelpers.getRecipesQuery};`),
    getRecipe: async (recipeId) =>
        await userDB.oneOrNone(
            `${recipeHelpers.getRecipesQuery} WHERE recipe_id = $1;`,
            [recipeId]
        ),
    createRecipe: async (info) => {
        await adminDb.tx(async (t) => {
            const { recipe_id: recipeId } = await t.one(
                'INSERT INTO recipes.recipe(recipe_name, time, diet, servings, instructions) VALUES ($1, $2, $3, $4, $5) RETURNING recipe_id;',
                [
                    ...(info.recipeId ? [info.recipeId] : []),
                    info.recipeName,
                    info.time,
                    info.diet,
                    info.servings,
                    info.instructions,
                ]
            );
            await recipeHelpers.insertToolsAndIngredients(
                t,
                recipeId,
                info.ingredients,
                info.tools
            );
        });
    },
    deleteRecipe: async (recipeId) =>
        await adminDb.none('DELETE FROM recipes.recipe WHERE recipe_id = $1;', [
            recipeId,
        ]),
    updateRecipe: async (recipeId, info) => {
        await adminDb.tx(async (t) => {
            await t.none(
                'UPDATE recipes.recipe SET (recipe_name, time, diet, servings, instructions) = ($2,$3,$4,$5,$6) WHERE recipe_id = $1',
                [
                    info.recipeId,
                    info.recipeName,
                    info.time,
                    info.diet,
                    info.servings,
                    info.instructions,
                ]
            );
            await t.none(
                'DELETE FROM recipes.recipe_ingredient WHERE recipe_id = $1;',
                [recipeId]
            );
            await t.none(
                'DELETE FROM recipes.recipe_ingredient WHERE recipe_id = $1;',
                [recipeId]
            );
            await recipeHelpers.insertToolsAndIngredients(
                t,
                recipeId,
                info.ingredients,
                info.tools
            );
        });
    },
};
