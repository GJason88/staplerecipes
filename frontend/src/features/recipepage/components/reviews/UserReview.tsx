import { Rating, Stack, Typography } from '@mui/material';

export default function UserReview({ displayName, date, rating, reviewText }: ReviewState) {
  return (
    <Stack gap={1}>
      <Typography fontWeight={700}>{displayName ?? 'Anonymous'}</Typography>
      <Typography fontSize={12}>{new Date(date * 1000).toDateString().replace(/^\S+\s/, '')}</Typography>
      <Rating readOnly value={rating} />
      <Typography
        sx={{
          wordWrap: 'break-word',
          borderRadius: '8px',
          padding: '8px',
          border: '1px solid rgba(0,0,0,0.1)',
          '&::-webkit-scrollbar': {
            backgroundColor: 'inherit',
            border: '1px solid rgba(0,0,0,0.2)',
            borderRadius: '32px',
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: '32px',
            ':hover': {
              backgroundColor: 'rgba(0,0,0,0.2)',
            },
            ':active': {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
          },
        }}
        overflow='auto'
        maxHeight='200px'
      >
        {reviewText}
      </Typography>
    </Stack>
  );
}
