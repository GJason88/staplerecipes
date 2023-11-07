export const ingredientHelpers = {
    mapMeasurements: (ingredientId, measurements) =>
        Object.entries(measurements).map(([measurement_name, grams]) => ({
            ingredient_id: ingredientId,
            measurement_name,
            grams,
        })),
    validateCreateInfo: (info) =>
        info && info.ingredientName && info.categoryId,
};
