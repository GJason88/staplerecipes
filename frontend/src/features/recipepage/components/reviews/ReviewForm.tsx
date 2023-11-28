import { Button, Rating, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { recipeWidth } from '../../../../data/constants';
import { User } from 'firebase/auth';

interface ReviewFormProps {
  submitFn: (review: ReviewState) => void;
  submitBtnText: string;
  currentUser: User;
  currentReview?: ReviewState;
}

export default function ReviewForm({
  submitFn,
  submitBtnText,
  currentUser,
  currentReview,
}: ReviewFormProps) {
  const [rating, setRating] = useState(currentReview?.rating);
  const [reviewText, setReviewText] = useState(currentReview?.reviewText ?? '');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rating) return;
    submitFn({
      reviewId: currentReview?.reviewId ?? '',
      recipeId: currentReview?.recipeId ?? '',
      uid: currentUser?.uid ?? '',
      displayName: currentUser?.displayName ?? '',
      rating,
      reviewText,
      date: Date.now(),
    });
  };
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      onSubmit={handleSubmit}
    >
      <Stack gap='4px'>
        <Typography fontWeight={600}>
          Rating <i style={{ fontSize: 12, fontWeight: 400 }}>(required)</i>
        </Typography>
        <Rating
          value={rating ?? 0}
          onChange={(e, newRating) => setRating(newRating ?? undefined)}
          sx={{ width: 'fit-content', fontSize: 38 }}
          precision={0.5}
        />
      </Stack>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder={'Write your review (optional)'}
        style={{
          fontFamily: 'roboto',
          maxWidth: recipeWidth - 48,
          resize: 'vertical',
          minHeight: 100,
          maxHeight: 400,
        }}
      ></textarea>
      <Button variant='contained' disabled={!rating} type='submit'>
        {submitBtnText}
      </Button>
    </form>
  );
}
