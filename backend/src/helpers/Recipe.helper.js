export const recipeHelpers = {
    validateCreateInfo: (info) =>
        info.recipeName &&
        info.time &&
        info.diet &&
        info.servings &&
        info.instructions.length &&
        info.ingredients.length &&
        info.tools.length,
    validateUpdateInfo: (info) =>
        typeof info.recipeName === 'string' &&
        info.recipeName &&
        Array.isArray(info.tools) &&
        Array.isArray(info.ingredients) &&
        typeof info.diet === 'string' &&
        typeof info.servings === 'string' &&
        typeof info.time === 'string' &&
        Array.isArray(info.instructions),
};
