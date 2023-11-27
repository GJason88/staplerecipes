import {
    additionalMeasurementsQuery,
    nestSelectQuery,
    nutrientsSelectQuery,
} from './utils/nestedSelectQueries.js';

const queries = {
    recipeIngredientsQuery: `coalesce(${nestSelectQuery(
        'array_to_json(array_agg(x))',
        `SELECT i.ingredient_id,ingredient_name,amount,default_measurement,g_ml AS ml_for_100g,${nutrientsSelectQuery},${additionalMeasurementsQuery} 
         FROM recipes.ingredient AS i
         INNER JOIN recipes.recipe_ingredient as ri ON i.ingredient_id = ri.ingredient_id AND r.recipe_id = ri.recipe_id`
    )}, '[]'::json) AS ingredients`,
    recipeToolsQuery: `coalesce(${nestSelectQuery(
        'array_to_json(array_agg(x))',
        `SELECT t.tool_id,tool_name 
         FROM recipes.tool as t
         INNER JOIN recipes.recipe_tool as rt ON t.tool_id = rt.tool_id AND r.recipe_id = rt.recipe_id`
    )}, '[]'::json) AS tools`,
    recipeReviewsQuery: `coalesce(${nestSelectQuery(
        'array_to_json(array_agg(x))',
        `SELECT review_id,rating,review_text,(select extract(epoch from date) as date) 
         FROM recipes.recipe_review as rr 
         WHERE r.recipe_id = rr.recipe_id`
    )}, '[]'::json) AS reviews`,
};

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
    getRecipesQuery: `SELECT r.recipe_id,recipe_name,time,diet,servings,instructions,${queries.recipeIngredientsQuery},${queries.recipeToolsQuery},${queries.recipeReviewsQuery} 
                      FROM recipes.recipe as r`,
    parseReviewDates: (review) => ({
        ...review,
        date: Date.parse(review.date),
    }),
};
