/* eslint-disable indent */
import pgPromise from 'pg-promise';
import { ingredientHelpers } from '../helpers/Ingredient.helpers.js';
import { pgpHelpers } from '../helpers/utils/pgpHelpers.js';
import {
    additionalMeasurementsQuery,
    ingredientCategorySelectQuery,
    nutrientsSelectQuery,
} from '../helpers/utils/nestedSelectQueries.js';
import { adminDb, userDB } from '../configs/db.config.js';

const pgp = pgPromise({ capSQL: true });

export const ingredientModel = {
    getIngredients: async () =>
        await userDB.any(
            `SELECT i.ingredient_id,ingredient_name,g_ml as ml_for_100g,${ingredientCategorySelectQuery},${nutrientsSelectQuery},${additionalMeasurementsQuery}
            FROM recipes.ingredient as i;`
        ),
    getIngredient: async (ingredientId) =>
        await userDB.one(
            `SELECT ingredient_name,category_name,g_ml,${nutrientsSelectQuery},${additionalMeasurementsQuery}
            FROM recipes.ingredient as i
            INNER JOIN recipes.ingredient_category as i_c ON i.category_id = i_c.category_id
            WHERE i.ingredient_id = $1;`,
            [ingredientId]
        ),
    getCategories: async () =>
        await userDB.any(
            'SELECT category_id, category_name FROM recipes.ingredient_category;'
        ),
    getNutrients: async (ingredientId) =>
        await userDB.any(
            'SELECT * FROM recipes.ingredient_nutrient WHERE ingredient_id = $1;',
            [ingredientId]
        ),
    createIngredient: async (info) => {
        await adminDb.tx(async (t) => {
            const { ingredient_id: ingredientId } = await t.one(
                'INSERT INTO recipes.ingredient(ingredient_name, category_id, g_ml) VALUES ($1, $2, $3) RETURNING ingredient_id;',
                [
                    info.ingredientName,
                    info.category.categoryId,
                    info.mlFor100G ?? 0,
                ]
            );
            await ingredientHelpers.insertMeasurementsAndNutrition(
                t,
                ingredientId,
                info.additionalMeasurements,
                info.nutrientsFor100G
            );
        });
    },
    createCategory: async (categoryInfo) =>
        await adminDb.none(
            'INSERT INTO recipes.ingredient_category(category_name) VALUES ($1);',
            [categoryInfo.name]
        ),
    updateIngredient: async (ingredientId, ingredientInfo) => {
        await adminDb.tx(async (t) => {
            await t.none(
                'UPDATE recipes.ingredient SET ingredient_name=$2,category_id=$3,g_ml=$4 WHERE ingredient_id=$1',
                [
                    ingredientId,
                    ingredientInfo.ingredientName,
                    ingredientInfo.category.categoryId,
                    ingredientInfo.mlFor100G ?? 0,
                ]
            );
            await t.none('DELETE FROM recipes.ingredient_measurement WHERE ingredient_id=$1', [ingredientId]);
            await t.none('DELETE FROM recipes.ingredient_nutrient WHERE ingredient_id=$1', [ingredientId]);
            await ingredientHelpers.insertMeasurementsAndNutrition(
                t,
                ingredientId,
                ingredientInfo.additionalMeasurements,
                ingredientInfo.nutrientsFor100G
            );
        });
    },
    updateNutrients: async (ingredientId, modifiedNutrients) =>
        await adminDb.none(
            pgp.helpers.update(
                modifiedNutrients,
                null,
                pgpHelpers.table('ingredient_nutrient', 'recipes')
            ) + pgpHelpers.createCondition('ingredient_id', ingredientId)
        ),
    deleteIngredient: async (ingredientId) =>
        await adminDb.none(
            'DELETE FROM recipes.ingredient WHERE ingredient_id = $1;',
            [ingredientId]
        ),
    deleteCategory: async (categoryId) =>
        await adminDb.none(
            'DELETE FROM recipes.ingredient_category WHERE category_id = $1;',
            [categoryId]
        ),
};
