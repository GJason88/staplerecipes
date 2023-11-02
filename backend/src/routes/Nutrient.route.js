import { Router } from 'express';
import { nutrientController } from '../controllers/Nutrient.controller.js';

const nutrient = Router();

nutrient.get('/nutrients', nutrientController.getNutrients);

export default nutrient;
