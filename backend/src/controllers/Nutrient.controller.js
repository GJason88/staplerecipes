import { nutrientModel } from '../models/Nutrient.model.js';

export const nutrientController = {
    getNutrients: async (req, res) => {
        const byId = req.query.byId;
        try {
            const jsonResponse = byId === 'true' ? await nutrientModel.getNutrientsById() : await nutrientModel.getNutrients();
            res.json(jsonResponse);
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }
    },
};
