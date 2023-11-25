import { Button, Rating, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { recipeWidth } from '../../../../data/constants';

export default function CreateReview() {
  const [rating, setRating] = useState<number>();
  const reviewTextRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rating) return;
    console.log(reviewTextRef.current?.value ?? '');
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
          onChange={(e, newRating) => setRating(newRating ?? undefined)}
          sx={{ width: 'fit-content', fontSize: 38 }}
          precision={0.5}
        />
      </Stack>
      <textarea
        ref={reviewTextRef}
        placeholder={'Write your review (optional)'}
        style={{
          fontFamily: 'roboto',
          maxWidth: recipeWidth - 48,
          resize: 'vertical',
          minHeight: 100,
          maxHeight: 400,
        }}
      ></textarea>
      <Button disabled={!rating} type='submit'>
        Create Review
      </Button>
    </form>
  );
}
