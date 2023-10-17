import pgPromise from 'pg-promise';

const pgp = pgPromise({ capSQL: true });

const modifiedNutrients = { protein: 5 };
const ingredientId = 5;

console.log(
    pgp.helpers.update(modifiedNutrients, null, 'recipes.ingredient_nutrient') +
        pgp.as.format(' WHERE ingredient_id = $1', ingredientId)
);
