import bodyParser from 'body-parser';
import { Router } from 'express';
import { reviewController } from '../controllers/Review.controller.js';

const review = Router();
const jsonParser = bodyParser.json();

review.get('/recipe/:recipeId/review', reviewController.getReview);

review.post('/recipe/:recipeId/review', jsonParser, reviewController.createReview);

review.put('/recipe/:recipeId/review', jsonParser, reviewController.updateReview);

review.delete('/recipe/:recipeId/review', reviewController.deleteReview);

export default review;
