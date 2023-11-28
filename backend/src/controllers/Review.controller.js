import { reviewHelpers } from '../helpers/Review.helper.js';
import { reviewModel } from '../models/Review.model.js';

export const reviewController = {
    getReview: async (req, res) => {
        try {
            const { recipeId, uid } = req.params;
            if (!recipeId || !uid) {
                return res.status(400).send('Missing uid and/or recipeId.');
            }
            const jsonResponse = await reviewModel.getReview(recipeId, uid);
            res.json(jsonResponse);
        } catch (e) {
            res.status(500).send('Something went wrong.');
            console.log(e);
        }
    },
    createReview: async (req, res) => {
        try {
            const recipeId = req.params?.recipeId;
            const review = req.body;
            if (!recipeId) {
                return res.status(400).send('Missing recipeId.');
            }
            if (!reviewHelpers.validateReview(review)) {
                return res.status(400).send('Invalid review info.');
            }
            await reviewModel.createReview(recipeId, review);
            res.json('success');
        } catch (e) {
            switch (e.code) {
                case '23505':
                    res.status(400).send(
                        'Review already exists for this recipe.'
                    );
                    break;
                default:
                    res.status(500).send('Something went wrong.');
                    console.log(e);
                    break;
            }
        }
    },
    updateReview: async (req, res) => {
        try {
            const reviewId = req.params?.reviewId;
            const review = req.body;
            if (!reviewId) {
                return res.status(400).send('Missing reviewId.');
            }
            if (!reviewHelpers.validateReview(review)) {
                return res.status(400).send('Invalid review info.');
            }
            await reviewModel.updateReview(reviewId, review);
            res.json('success');
        } catch (e) {
            res.status(500).send('Something went wrong.');
            console.log(e);
        }
    },
    deleteReview: async (req, res) => {
        try {
            const reviewId = req.params?.reviewId;
            if (!reviewId) {
                return res.status(400).send('Missing reviewId.');
            }
            await reviewModel.deleteReview(reviewId);
            res.json('success');
        } catch (e) {
            res.status(500).send('Something went wrong.');
            console.log(e);
        }
    },
};
