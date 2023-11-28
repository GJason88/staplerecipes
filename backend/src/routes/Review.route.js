import bodyParser from 'body-parser';
import { Router } from 'express';
import { reviewController } from '../controllers/Review.controller.js';

const review = Router();
const jsonParser = bodyParser.json();

review.get('/recipe/:recipeId/review/:uid', reviewController.getReview);

review.post('/recipe/:recipeId/review', jsonParser, reviewController.createReview);

review.put('/review/:reviewId', jsonParser, reviewController.updateReview);

review.delete('/review/:reviewId', reviewController.deleteReview);

export default review;
