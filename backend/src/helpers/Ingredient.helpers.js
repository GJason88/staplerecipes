import { nutrientsFToB } from '../../data/mappings.js';

export const ingredientHelpers = {
    mapMeasurements: (ingredientId, measurements) =>
        measurements.map((m) => ({
            ingredient_id: ingredientId,
            measurement_name: m.name,
            grams: m.grams,
        })),
    containsAllNutrients: (nutrients) =>
        Object.keys(nutrientsFToB).every((nutrient) =>
            Object.hasOwn(nutrients, nutrient)
        ),
};
