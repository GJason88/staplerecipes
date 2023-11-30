import { reviewHelpers } from '../helpers/Review.helper.js';
import { reviewModel } from '../models/Review.model.js';

export const reviewController = {
    getReview: async (req, res) => {
        try {
            const recipeId = req.params?.recipeId;
            const uid = res.locals.uid;
            if (!uid) {
                return res.status(400).send('Missing uid.');
            }
            if (!recipeId) {
                return res.status(400).send('Missing recipeId.');
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
            const uid = res.locals.uid;
            const review = req.body;
            if (!uid) {
                return res.status(400).send('Missing uid.');
            }
            if (!recipeId) {
                return res.status(400).send('Missing recipeId.');
            }
            if (!reviewHelpers.validateReview(review)) {
                return res.status(400).send('Invalid review info.');
            }
            await reviewModel.createReview(review, recipeId, uid);
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
            const recipeId = req.params?.recipeId;
            const uid = res.locals.uid;
            const review = req.body;
            if (!uid) {
                return res.status(400).send('Missing uid.');
            }
            if (!recipeId) {
                return res.status(400).send('Missing recipeId.');
            }
            if (!reviewHelpers.validateReview(review)) {
                return res.status(400).send('Invalid review info.');
            }
            await reviewModel.updateReview(review, recipeId, uid);
            res.json('success');
        } catch (e) {
            res.status(500).send('Something went wrong.');
            console.log(e);
        }
    },
    deleteReview: async (req, res) => {
        try {
            const uid = res.locals.uid;
            const recipeId = req.params?.recipeId;
            if (!uid) {
                return res.status(400).send('Missing uid.');
            }
            if (!recipeId) {
                return res.status(400).send('Missing recipeId.');
            }
            await reviewModel.deleteReview(recipeId, uid);
            res.json('success');
        } catch (e) {
            res.status(500).send('Something went wrong.');
            console.log(e);
        }
    },
};
