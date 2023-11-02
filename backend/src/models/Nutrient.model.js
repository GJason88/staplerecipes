import db from '../configs/db.configs.js';

export const nutrientModel = {
    getNutrients: async () => {
        const result = await db.any(
            'SELECT jsonb_object_agg(lookup, x) FROM (SELECT lookup, nutrient_id, nutrient_name, unit, dv FROM recipes.nutrient) x;'
        );
        return result[0].jsonb_object_agg;
    },
};
