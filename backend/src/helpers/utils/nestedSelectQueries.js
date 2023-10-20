import { nutrientsBackend } from '../../../data/constants.js';

const nestSelectQuery = (jsonMethod, query) => {
    return `(SELECT ${jsonMethod} FROM (${query}) x)`;
};

export const nutrientsSelectQuery = `${nestSelectQuery(
    'row_to_json(x)',
    `SELECT ${nutrientsBackend} FROM recipes.ingredient_nutrient AS i_n WHERE i.ingredient_id = i_n.ingredient_id`
)} AS nutrients_for_100g`;

export const additionalMeasurementsQuery =
    '(SELECT json_object_agg(measurement_name, grams) AS additional_measurements FROM recipes.ingredient_measurement AS i_m WHERE i.ingredient_id = i_m.ingredient_id)';
