import db from '../db.configs.js';

export async function getAllIngredientsQuery() {
    const selectCategoriesQuery = {
        text: 'SELECT ingredient_id, ingredient_name, category_id FROM recipes.ingredient;',
    };
    return await db.any(selectCategoriesQuery);
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
    return await db.none(insertIngredientQuery.text, insertIngredientQuery.values);
}

export async function createCategoryQuery(categoryInfo) {
    const insertCategoryQuery = {
        text: 'INSERT INTO recipes.ingredient_category(category_name) VALUES ($1);',
        values: [categoryInfo.name],
    };
    return await db.none(insertCategoryQuery.text, insertCategoryQuery.values);
}

export async function deleteIngredientQuery(ingrInfo) {
    const deleteIngredientQuery = {
        text: 'DELETE FROM recipes.ingredient WHERE ingredient_id = $1;',
        values: [ingrInfo.id]
    };
    return await db.none(deleteIngredientQuery.text, deleteIngredientQuery.values);
}

export async function deleteCategoryQuery(categoryInfo) {
    const deleteCategoryQuery = {
        text: 'DELETE FROM recipes.ingredient WHERE category_id = $1; DELETE FROM recipes.ingredient_category WHERE category_id = $1;',
        values: [categoryInfo.id]
    };
    return await db.none(deleteCategoryQuery.text, deleteCategoryQuery.values);
}
