import { Rating, Stack, Typography } from '@mui/material';

export default function UserReview({
  displayName,
  date,
  rating,
  reviewText,
}: ReviewState) {
  return (
    <Stack gap={1}>
      <Typography fontWeight={700}>{displayName}</Typography>
      <Typography fontSize={12}>
        {date.toDateString().replace(/^\S+\s/, '')}
      </Typography>
      <Rating readOnly defaultValue={rating} />
      <Typography>{reviewText}</Typography>
    </Stack>
  );
}
