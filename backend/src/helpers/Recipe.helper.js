export const recipeHelpers = {
    containsAllInfo: (info) =>
        info.name &&
        info.time &&
        info.diet &&
        info.instructions.length &&
        info.ingredients.length &&
        info.tools.length,
};
