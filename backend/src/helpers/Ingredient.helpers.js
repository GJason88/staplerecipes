import { nutrientIdToKey } from '../../data/mappings.js';

export const ingredientHelpers = {
    mapMeasurements: (ingredientId, measurements) =>
        measurements.map((m) => ({
            ingredient_id: ingredientId,
            measurement_name: m.measurementName,
            grams: m.grams,
        })),
    validateCreateInfo: (info) =>
        info.name &&
        info.categoryId &&
        info.nutrients &&
        Object.values(nutrientIdToKey).every((nutrient) =>
            Object.hasOwn(info.nutrients, nutrient)
        ),
    transformNutrients: (nutrients) => {
        const newNutrients = {};
        for (const nutrient of nutrients) {
            const attr = nutrientIdToKey[nutrient.nutrient_id.toString()];
            newNutrients[attr] = nutrient;
        }
        return newNutrients;
    },
};
