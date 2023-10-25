const nestSelectQuery = (jsonMethod, query) => {
    return `(SELECT ${jsonMethod} FROM (${query}) x)`;
};

export const nutrientsSelectQuery = `${nestSelectQuery(
    'array_to_json(array_agg(x))',
    'SELECT i_n.nutrient_id, nutrient_name, amount, dv, unit FROM recipes.ingredient_nutrient AS i_n INNER JOIN recipes.nutrient AS n ON n.nutrient_id = i_n.nutrient_id WHERE i.ingredient_id = i_n.ingredient_id'
)} AS nutrients_for_100g`;

export const additionalMeasurementsQuery =
    '(SELECT json_object_agg(measurement_name, grams) AS additional_measurements FROM recipes.ingredient_measurement AS i_m WHERE i.ingredient_id = i_m.ingredient_id)';
