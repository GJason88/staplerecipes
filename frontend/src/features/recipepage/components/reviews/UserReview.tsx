import { Rating, Stack, Typography } from '@mui/material';

export default function UserReview({
  displayName,
  date,
  rating,
  reviewText,
}: ReviewState) {
  return (
    <Stack gap={1}>
      <Typography fontWeight={700}>{displayName ?? 'Anonymous'}</Typography>
      <Typography fontSize={12}>
        {new Date(date * 1000).toDateString().replace(/^\S+\s/, '')}
      </Typography>
      <Rating readOnly defaultValue={rating} />
      <Typography>{reviewText}</Typography>
    </Stack>
  );
}
