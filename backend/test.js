import pgPromise from 'pg-promise';
import { recipeModel } from './src/models/Recipe.model.js';
import { ingredientModel } from './src/models/Ingredient.model.js';

const pgp = pgPromise({ capSQL: true });

const modifiedNutrients = { protein: 5 };
const ingredientId = 5;

const test = async () => {
    try {
        const jsonResponse = await recipeModel.getRecipe(120);
        // const jsonResponse = await ingredientModel.getIngredient(4);
        console.log(jsonResponse[1][1]);
    } catch (e) {
        console.log(e);
    }
};

test();
// console.log('hello');
