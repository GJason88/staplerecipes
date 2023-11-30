import db from "../configs/db.config.js";

export const reviewHelpers = {
    doTaskWithRLS: async (query, params, uid) =>
        await db.task('review-rls-task', async (t) => {
            await t.none('SET rls.uid = ${uid}', { uid });
            await t.none(query, params);
        }),
    validateReview: (review) =>
        typeof review.reviewText === 'string' &&
        review.reviewText &&
        typeof review.rating === 'number' &&
        review.rating > 0 &&
        review.rating <= 5 &&
        typeof review.displayName === 'string' &&
        review.displayName &&
        typeof review.date === 'number' &&
        review.date,
    getReviewsQuery: `SELECT display_name,rating,review_text,(select extract(epoch from date) as date)::int 
                      FROM recipes.recipe_review as rr`,
};
