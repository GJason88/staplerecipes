import pgPromise from 'pg-promise';
import { recipeModel } from './src/models/Recipe.model.js';
import { ingredientModel } from './src/models/Ingredient.model.js';
import { ingredientHelpers } from './src/helpers/Ingredient.helpers.js';
import { recipeController } from './src/controllers/Recipe.controller.js';
import { mapFields } from './src/helpers/utils/mapFields.js';

const pgp = pgPromise({ capSQL: true });

const modifiedNutrients = { protein: 5 };
const ingredientId = 5;

const recipeInfoTest = {
    recipeInfo: { recipeName: 'new name', diet: 'new diet' },
    addIngredients: [
        { ingredientId: 1, amount: 5, defaultMeasurement: 'cup' },
        { ingredientId: 2, amount: 1, defaultMeasurement: 'grams' },
    ],
    removeIngredients: [
        { ingredientId: 1, amount: 5, defaultMeasurement: 'cup' },
    ],
    addTools: [1, 3, 5],
    removeTools: [2, 4, 6],
};
const test = async () => {
    try {
        // const jsonResponse = await recipeController.updateRecipe(
        //     120,
        //     recipeInfoTest
        // );
        const jsonResponse = await ingredientModel.getIngredient(4);
        jsonResponse.nutrients_for_100g = ingredientHelpers.transformNutrients(
            jsonResponse.nutrients_for_100g
        );
        console.log(jsonResponse);
    } catch (e) {
        console.log(e);
    }
};

test();
// console.log('hello');
// console.log(
//     recipeInfoTest.addIngredients.map((ingredient) => mapFields(ingredient))
// );
// console.log(
//     pgp.helpers.insert(
//         recipeInfoTest.addIngredients.map((ingredient) => ({
//             recipe_id: 5,
//             ...mapFields(ingredient),
//         })),
//         ['recipe_id', 'ingredient_id', 'amount', 'default_measurement'],
//         'recipes.fsdfnklsdnfk'
//     )
// );

// console.log(
//     pgp.helpers.insert(
//         recipeInfoTest.addTools.map((toolId) => ({tool_id: toolId, recipe_id: 5})),
//         ['tool_id', 'recipe_id'],
//         'ta'
//     )
// );
