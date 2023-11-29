import pgPromise from 'pg-promise';
import db from '../configs/db.config.js';
import { pgpHelpers } from '../helpers/utils/pgpHelpers.js';
import { recipeHelpers } from '../helpers/Recipe.helper.js';

const pgp = pgPromise({ capSQL: true });

export const recipeModel = {
    getRecipes: async () => await db.any(`${recipeHelpers.getRecipesQuery};`),
    getRecipe: async (recipeId) =>
        await db.oneOrNone(
            `${recipeHelpers.getRecipesQuery} WHERE recipe_id = $1;`,
            [recipeId]
        ),
    createRecipe: async (info) => {
        const recipeQuery =
            'INSERT INTO recipes.recipe(recipe_name, time, diet, servings, instructions) VALUES ($1, $2, $3, $4, $5) RETURNING recipe_id;';
        const { recipe_id: recipeId } = await db.one(recipeQuery, [
            ...(info.recipeId ? [info.recipeId] : []),
            info.recipeName,
            info.time,
            info.diet,
            info.servings,
            info.instructions,
        ]);
        await db.none(
            recipeHelpers.insertIngredientsQuery(info.ingredients, recipeId)
        );
        info.tools.length &&
            (await db.none(
                recipeHelpers.insertToolsQuery(info.tools, recipeId)
            ));
    },
    deleteRecipe: async (recipeId) =>
        await db.none('DELETE FROM recipes.recipe WHERE recipe_id = $1;', [
            recipeId,
        ]),
    updateRecipe: async (recipeId, info) => {
        await db.none(
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
        await db.multi(
            'DELETE FROM recipes.recipe_ingredient WHERE recipe_id = $1; ' +
                recipeHelpers.insertIngredientsQuery(
                    info.ingredients,
                    recipeId
                ),
            [recipeId]
        );
        await db.multi(
            'DELETE FROM recipes.recipe_tool WHERE recipe_id = $1; ' +
                recipeHelpers.insertToolsQuery(info.tools, recipeId),
            [recipeId]
        );
    },
};
