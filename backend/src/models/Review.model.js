import pgPromise from 'pg-promise';
import db from '../configs/db.config.js';
import { reviewHelpers } from '../helpers/Review.helper.js';

const pgp = pgPromise({ capSQL: true });

export const reviewModel = {
    getReview: async (recipeId, uid) =>
        await db.oneOrNone(
            `${reviewHelpers.getReviewsQuery} WHERE recipe_id = $1 AND uid = $2;`,
            [recipeId, uid]
        ),
    createReview: async (recipeId, review) => {
        const createReviewQuery = review.reviewId
            ? 'INSERT INTO recipes.recipe_review(review_id,recipe_id,uid,display_name,rating,review_text,date) VALUES ($1,$2,$3,$4,$5,$6,$7)'
            : 'INSERT INTO recipes.recipe_review(recipe_id,uid,display_name,rating,review_text,date) VALUES ($1,$2,$3,$4,$5,$6)';
        return await db.none(createReviewQuery, [
            ...(review.reviewId ? [review.reviewId] : []),
            recipeId,
            review.uid,
            review.displayName,
            review.rating,
            review.reviewText,
            pgp.as.date(new Date(review.date)),
        ]);
    },
    deleteReview: async (reviewId) =>
        await db.none(
            'DELETE FROM recipes.recipe_review WHERE review_id = $1',
            [reviewId]
        ),
    updateReview: async (reviewId, review) => {
        await reviewModel.deleteReview(reviewId);
        await reviewModel.createReview(review.recipeId, review);
    },
};
