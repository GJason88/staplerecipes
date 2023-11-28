export const reviewHelpers = {
    validateReview: (review, update = false) =>
        (!update || review.reviewId) &&
        typeof review.uid === 'string' &&
        review.uid &&
        typeof review.reviewText === 'string' &&
        review.reviewText &&
        typeof review.rating === 'number' &&
        review.rating > 0 &&
        review.rating <= 5 &&
        typeof review.displayName === 'string' &&
        review.displayName &&
        typeof review.date === 'number' &&
        review.date,
    getReviewsQuery: `SELECT review_id,recipe_id,display_name,rating,review_text,(select extract(epoch from date) as date)::int 
                      FROM recipes.recipe_review as rr`,
};
