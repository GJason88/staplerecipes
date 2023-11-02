import db from '../configs/db.configs.js';

const selectNutrients =
    'SELECT lookup, nutrient_id, nutrient_name, unit, dv FROM recipes.nutrient';

export const nutrientModel = {
    getNutrients: async () => {
        const result = await db.any(
            `SELECT jsonb_object_agg(lookup, x) FROM (${selectNutrients}) x;`
        );
        return result[0].jsonb_object_agg;
    },
    getNutrientsById: async () => {
        const result = await db.any(
            `SELECT jsonb_object_agg(nutrient_id, x) FROM (${selectNutrients}) x;`
        );
        return result[0].jsonb_object_agg;
    },
};
