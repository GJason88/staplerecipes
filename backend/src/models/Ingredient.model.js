/* eslint-disable indent */
import pgPromise from 'pg-promise';
import db from '../configs/db.config.js';
import { ingredientHelpers } from '../helpers/Ingredient.helpers.js';
import { pgpHelpers } from '../helpers/utils/pgpHelpers.js';
import {
    additionalMeasurementsQuery,
    ingredientCategorySelectQuery,
    nutrientsSelectQuery,
} from '../helpers/utils/nestedSelectQueries.js';

const pgp = pgPromise({ capSQL: true });

export const ingredientModel = {
    getIngredients: async () =>
        await db.any(
            `SELECT i.ingredient_id,ingredient_name,g_ml as ml_for_100g,${ingredientCategorySelectQuery},${nutrientsSelectQuery},${additionalMeasurementsQuery}
            FROM recipes.ingredient as i;`
        ),
    getIngredient: async (ingredientId) =>
        await db.one(
            `SELECT ingredient_name,category_name,g_ml,${nutrientsSelectQuery},${additionalMeasurementsQuery}
            FROM recipes.ingredient as i
            INNER JOIN recipes.ingredient_category as i_c ON i.category_id = i_c.category_id
            WHERE i.ingredient_id = $1;`,
            [ingredientId]
        ),
    getCategories: async () =>
        await db.any(
            'SELECT category_id, category_name FROM recipes.ingredient_category;'
        ),
    getNutrients: async (ingredientId) =>
        await db.any(
            'SELECT * FROM recipes.ingredient_nutrient WHERE ingredient_id = $1;',
            [ingredientId]
        ),
    createIngredient: async (info) => {
        const query = info.ingredientId
            ? 'INSERT INTO recipes.ingredient(ingredient_id, ingredient_name, category_id, g_ml) VALUES ($1, $2, $3, $4) RETURNING ingredient_id;'
            : 'INSERT INTO recipes.ingredient(ingredient_name, category_id, g_ml) VALUES ($1, $2, $3) RETURNING ingredient_id;';
        const { ingredient_id: ingredientId } = await db.one(query, [
            ...(info.ingredientId ? [info.ingredientId] : []),
            info.ingredientName,
            info.category.categoryId,
            info.mlFor100G ?? 0,
        ]);
        Object.keys(info.additionalMeasurements).length &&
            (await db.none(
                pgp.helpers.insert(
                    ingredientHelpers.mapMeasurements(
                        ingredientId,
                        info.additionalMeasurements
                    ),
                    pgpHelpers.columns([
                        'ingredient_id',
                        'measurement_name',
                        'grams',
                    ]),
                    pgpHelpers.table('ingredient_measurement', 'recipes')
                )
            ));
        await db.none(
            pgp.helpers.insert(
                Object.entries(info.nutrientsFor100G).map(
                    ([nutrient_id, amount]) => ({
                        ingredient_id: ingredientId,
                        nutrient_id,
                        amount,
                    })
                ),
                pgpHelpers.columns(['ingredient_id', 'nutrient_id', 'amount']),
                pgpHelpers.table('ingredient_nutrient', 'recipes')
            )
        );
    },
    createCategory: async (categoryInfo) =>
        await db.none(
            'INSERT INTO recipes.ingredient_category(category_name) VALUES ($1);',
            [categoryInfo.name]
        ),
    updateIngredient: async (ingredientId, ingredientInfo) => {
        await ingredientModel.deleteIngredient(ingredientId);
        await ingredientModel.createIngredient(ingredientInfo); // includes old id
    },
    updateNutrients: async (ingredientId, modifiedNutrients) =>
        await db.none(
            pgp.helpers.update(
                modifiedNutrients,
                null,
                pgpHelpers.table('ingredient_nutrient', 'recipes')
            ) + pgpHelpers.createCondition('ingredient_id', ingredientId)
        ),
    deleteIngredient: async (ingredientId) =>
        await db.none(
            'DELETE FROM recipes.ingredient WHERE ingredient_id = $1;',
            [ingredientId]
        ),
    deleteCategory: async (categoryId) =>
        await db.none(
            'DELETE FROM recipes.ingredient_category WHERE category_id = $1;',
            [categoryId]
        ),
};
