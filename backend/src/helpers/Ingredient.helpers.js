import { nutrientsFrontend } from '../../data/constants.js';

export const ingredientHelpers = {
    mapMeasurements: (ingredientId, measurements) =>
        measurements.map((m) => ({
            ingredient_id: ingredientId,
            measurement_name: m.name,
            grams: m.grams,
        })),
    validateCreateInfo: (info) =>
        info.name &&
        info.categoryId &&
        info.nutrients &&
        nutrientsFrontend.every((nutrient) =>
            Object.hasOwn(info.nutrients, nutrient)
        ),
};
