export const ingredientHelpers = {
    mapMeasurements: (ingredientId, measurements) =>
        measurements.map((m) => ({
            ingredient_id: ingredientId,
            measurement_name: m.measurementName,
            grams: m.grams,
        })),
    validateCreateInfo: (info) =>
        info.ingredientName &&
        info.categoryId &&
        info.nutrientsFor100G
};
