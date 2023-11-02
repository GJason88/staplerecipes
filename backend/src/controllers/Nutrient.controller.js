import { nutrientModel } from '../models/Nutrient.model.js';

export const nutrientController = {
    getNutrients: async (req, res) => {
        try {
            const jsonResponse = await nutrientModel.getNutrients();
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
};
