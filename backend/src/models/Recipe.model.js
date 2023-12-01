import pgPromise from 'pg-promise';
import { recipeHelpers } from '../helpers/Recipe.helper.js';
import { adminDb, userDB } from '../configs/db.config.js';

const pgp = pgPromise({ capSQL: true });

export const recipeModel = {
    getRecipes: async () =>
        await userDB.any(`${recipeHelpers.getRecipesQuery};`),
    getRecipe: async (recipeId) =>
        await userDB.oneOrNone(
            `${recipeHelpers.getRecipesQuery} WHERE recipe_id = $1;`,
            [recipeId]
        ),
    createRecipe: async (info) => {
        const recipeQuery =
            'INSERT INTO recipes.recipe(recipe_name, time, diet, servings, instructions) VALUES ($1, $2, $3, $4, $5) RETURNING recipe_id;';
        const { recipe_id: recipeId } = await adminDb.one(recipeQuery, [
            ...(info.recipeId ? [info.recipeId] : []),
            info.recipeName,
            info.time,
            info.diet,
            info.servings,
            info.instructions,
        ]);
        await adminDb.none(
            recipeHelpers.insertIngredientsQuery(info.ingredients, recipeId)
        );
        info.tools.length &&
            (await adminDb.none(
                recipeHelpers.insertToolsQuery(info.tools, recipeId)
            ));
    },
    deleteRecipe: async (recipeId) =>
        await adminDb.none('DELETE FROM recipes.recipe WHERE recipe_id = $1;', [
            recipeId,
        ]),
    updateRecipe: async (recipeId, info) => {
        await adminDb.none(
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
        await adminDb.multi(
            'DELETE FROM recipes.recipe_ingredient WHERE recipe_id = $1; ' +
                recipeHelpers.insertIngredientsQuery(
                    info.ingredients,
                    recipeId
                ),
            [recipeId]
        );
        await adminDb.multi(
            'DELETE FROM recipes.recipe_tool WHERE recipe_id = $1; ' +
                recipeHelpers.insertToolsQuery(info.tools, recipeId),
            [recipeId]
        );
    },
};
