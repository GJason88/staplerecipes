import db from '../db.configs.js';

export async function getAllIngredientsQuery() {
    const selectIngredientsQuery = {
        text: 'SELECT ingredient_id, ingredient_name, i.category_id, category_name, calories, carbs, protein, fat, fiber \
               FROM recipes.ingredient as i \
               INNER JOIN recipes.ingredient_category as ci \
               ON i.category_id = ci.category_id;',
    };
    return await db.any(selectIngredientsQuery);
}

export async function getAllCategoriesQuery() {
    const selectCategoriesQuery = {
        text: 'SELECT category_id, category_name FROM recipes.ingredient_category;',
    };
    return await db.any(selectCategoriesQuery);
}

export async function createIngredientQuery(ingrInfo) {
    const insertIngredientQuery = {
        text: 'INSERT INTO recipes.ingredient(ingredient_name, category_id) VALUES ($1, $2);',
        values: [ingrInfo.name, parseInt(ingrInfo.category)],
    };
    return await db.none(insertIngredientQuery);
}

export async function createCategoryQuery(categoryInfo) {
    const insertCategoryQuery = {
        text: 'INSERT INTO recipes.ingredient_category(category_name) VALUES ($1);',
        values: [categoryInfo.name],
    };
    return await db.none(insertCategoryQuery);
}

export async function updateNutritionQuery(ingrInfo, ingrId) {
    const updateNutritionQuery = {
        text: 'UPDATE recipes.ingredient SET calories = $1, carbs = $2, protein = $3, fat = $4, fiber = $5 WHERE ingredient_id = $6',
        values: [ingrInfo.calories, ingrInfo.carbs, ingrInfo.protein, ingrInfo.fat, ingrInfo.fiber, ingrId],
    };
    return await db.none(updateNutritionQuery);
}

export async function deleteIngredientQuery(ingrInfo) {
    const deleteIngredientQuery = {
        text: 'DELETE FROM recipes.ingredient WHERE ingredient_id = $1;',
        values: [ingrInfo.id]
    };
    return await db.none(deleteIngredientQuery);
}

export async function deleteCategoryQuery(categoryInfo) {
    const deleteCategoryQuery = {
        text: 'DELETE FROM recipes.ingredient_category WHERE category_id = $1;',
        values: [categoryInfo.id]
    };
    return await db.none(deleteCategoryQuery);
}
