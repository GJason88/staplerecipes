export const recipeHelpers = {
    validateInfo: (info) =>
        typeof info.recipeName === 'string' &&
        info.recipeName &&
        Array.isArray(info.tools) &&
        Array.isArray(info.ingredients) &&
        info.ingredients.length &&
        typeof info.diet === 'string' &&
        typeof info.servings === 'string' &&
        typeof info.time === 'string' &&
        Array.isArray(info.instructions) &&
        info.instructions,
};
