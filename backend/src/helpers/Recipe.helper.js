import { mapFields } from './utils/mapFields.js';

export const recipeHelpers = {
    validateCreateInfo: (info) =>
        info.name &&
        info.time &&
        info.diet &&
        info.instructions.length &&
        info.ingredients.length &&
        info.tools.length,
    validateUpdateInfo: (info) =>
        info.recipeFields?.name ||
        info.recipeFields.recipeName ||
        info.recipeFields.diet ||
        info.recipeFields.instructions?.length ||
        (info.addIngredients?.length &&
            info.addIngredients.every(
                (ingr) =>
                    ingr.ingredientId && ingr.amount && ingr.defaultMeasurement
            )) ||
        info.removeIngredients?.length ||
        info.addTools?.length ||
        info.removeTools?.length,
};
