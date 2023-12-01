import pgPromise from 'pg-promise';
import { reviewHelpers } from '../helpers/Review.helper.js';
import { userDB } from '../configs/db.config.js';

const pgp = pgPromise({ capSQL: true });

export const reviewModel = {
    getReview: async (recipeId, uid) =>
        await userDB.oneOrNone(
            `${reviewHelpers.getReviewsQuery} WHERE recipe_id = $1 AND uid = $2;`,
            [recipeId, uid]
        ),
    createReview: async (review, recipeId, uid) => {
        const createReviewQuery =
            'INSERT INTO recipes.recipe_review(recipe_id,uid,display_name,rating,review_text,date) VALUES ($1,$2,$3,$4,$5,$6)';
        return await userDB.none(createReviewQuery, [
            recipeId,
            uid,
            review.displayName,
            review.rating,
            review.reviewText,
            pgp.as.date(new Date(review.date)),
        ]);
    },
    deleteReview: async (recipeId, uid) =>
        reviewHelpers.doTaskWithRLS(
            'DELETE FROM recipes.recipe_review WHERE recipe_id = $1 AND uid = $2',
            [recipeId, uid],
            uid
        ),
    updateReview: async (review, recipeId, uid) =>
        reviewHelpers.doTaskWithRLS(
            'UPDATE recipes.recipe_review SET display_name=$3,rating=$4,review_text=$5,date=$6 WHERE recipe_id = $1 AND uid = $2',
            [
                recipeId,
                uid,
                review.displayName,
                review.rating,
                review.reviewText,
                pgp.as.date(new Date(review.date)),
            ],
            uid
        ),
};
