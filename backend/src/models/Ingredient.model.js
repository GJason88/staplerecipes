import pgPromise from 'pg-promise';
import db from '../configs/db.configs.js';
import { ingredientHelpers } from '../helpers/Ingredient.helpers.js';
import { mapNutrients } from '../helpers/mapNutrients.js';
import { pgpHelpers } from '../helpers/pgpHelpers.js';

const pgp = pgPromise({ capSQL: true });

export const ingredientModel = {
    getIngredients: async () =>
        await db.any(
            'SELECT ingredient_id, ingredient_name, i.category_id, category_name, calories, total_fat, carbohydrates, protein \
        FROM recipes.ingredient as i \
        INNER JOIN recipes.ingredient_category as i_c ON i.category_id = i_c.category_id \
        INNER JOIN recipes.ingredient_nutrient as i_n ON i.ingredient_id = i_n.ingredient_id;'
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
    createIngredient: async (ingrInfo, nutrients, measurements) => {
        const ingredientId = await db.one(
            'INSERT INTO recipes.ingredient(ingredient_name, category_id, g_ml) VALUES ($1, $2, $3) RETURNING ingredient_id;',
            [ingrInfo.name, ingrInfo.category, ingrInfo.gml]
        );
        await db.none(
            pgp.helpers.insert(
                ingredientHelpers.mapMeasurements(ingredientId, measurements),
                null,
                'recipes.ingredient_measurement'
            )
        );
        await db.none(
            pgp.helpers.insert(
                mapNutrients(nutrients),
                null,
                'recipes.ingredient_nutrient'
            ) + pgpHelpers.createCondition('ingredient_id', ingredientId)
        );
    },
    createCategory: async (categoryInfo) =>
        await db.none(
            'INSERT INTO recipes.ingredient_category(category_name) VALUES ($1);',
            [categoryInfo.name]
        ),
    updateNutrients: async (ingredientId, modifiedNutrients) =>
        await db.none(
            pgp.helpers.update(
                modifiedNutrients,
                null,
                'recipes.ingredient_nutrient'
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
