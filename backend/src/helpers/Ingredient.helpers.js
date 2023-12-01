import pgPromise from 'pg-promise';
import { pgpHelpers } from './utils/pgpHelpers.js';

const pgp = pgPromise({ capSQL: true });

const queries = {
    insertMeasurementsQuery: (ingredientId, additionalMeasurements) =>
        pgp.helpers.insert(
            ingredientHelpers.mapMeasurements(
                ingredientId,
                additionalMeasurements
            ),
            pgpHelpers.columns(['ingredient_id', 'measurement_name', 'grams']),
            pgpHelpers.table('ingredient_measurement', 'recipes')
        ),
    insertNutritionQuery: (ingredientId, nutrientsFor100G) =>
        pgp.helpers.insert(
            Object.entries(nutrientsFor100G).map(([nutrient_id, amount]) => ({
                ingredient_id: ingredientId,
                nutrient_id,
                amount,
            })),
            pgpHelpers.columns(['ingredient_id', 'nutrient_id', 'amount']),
            pgpHelpers.table('ingredient_nutrient', 'recipes')
        ),
};

export const ingredientHelpers = {
    mapMeasurements: (ingredientId, measurements) =>
        Object.entries(measurements).map(([measurement_name, grams]) => ({
            ingredient_id: ingredientId,
            measurement_name,
            grams,
        })),
    validateCreateInfo: (info) =>
        info &&
        typeof info.ingredientName === 'string' &&
        info.ingredientName &&
        info.category?.categoryId &&
        Object.keys(info.nutrientsFor100G).length,
    insertMeasurementsAndNutrition: async (
        task,
        ingredientId,
        additionalMeasurements,
        nutrientsFor100G
    ) => {
        Object.keys(additionalMeasurements).length &&
            (await task.none(
                queries.insertMeasurementsQuery(
                    ingredientId,
                    additionalMeasurements
                )
            ));
        await task.none(
            queries.insertNutritionQuery(ingredientId, nutrientsFor100G)
        );
    },
};
