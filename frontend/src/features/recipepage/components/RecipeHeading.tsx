import { Box, Button, Link, Rating, Stack, Typography } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PrintIcon from '@mui/icons-material/Print';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useReactToPrint } from 'react-to-print';
import ShareButton from './ShareButton';

interface RecipeHeadingProps {
  name: string;
  reviewsRef: React.MutableRefObject<HTMLDivElement | null>;
  printRef: React.MutableRefObject<HTMLDivElement | null>;
  recipeReviews: Array<ReviewState>;
}

export default function RecipeHeading({
  name,
  reviewsRef,
  printRef,
  recipeReviews,
}: RecipeHeadingProps) {
  const numReviews = recipeReviews.length;
  const averageRating = numReviews
    ? recipeReviews
        .map((review) => review.rating)
        .reduce((prev, cur) => (prev += cur)) / numReviews
    : 0;
  const handleRateClick = () =>
    reviewsRef.current &&
    window.scrollTo({
      top: reviewsRef.current.getBoundingClientRect().top + window.scrollY - 72, // account for topappbar
      behavior: 'smooth',
    });
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    copyStyles: true,
  });
  return (
    <>
      <Typography mb={-2} fontSize={38} fontWeight={600}>
        {name}
      </Typography>
      <Box display='flex'>
        <Rating readOnly precision={0.2} value={averageRating} />
        <Typography pl={'8px'} pr={'12px'} pt={'2px'}>
          <Link>{averageRating.toFixed(1)}</Link> ({numReviews})
        </Typography>
      </Box>
      <Button
        startIcon={<BookmarkBorderIcon />}
        variant='outlined'
        sx={{ width: 200 }}
      >
        Save Recipe
      </Button>
      <Stack flexDirection={'row'}>
        <Button
          variant='outlined'
          onClick={handleRateClick}
          startIcon={<RateReviewIcon />}
        >
          Rate
        </Button>
        <Button
          variant='outlined'
          onClick={handlePrint}
          startIcon={<PrintIcon />}
        >
          Print
        </Button>
        <ShareButton />
      </Stack>
      <img src='/assets/black.jpg'></img>
    </>
  );
}
