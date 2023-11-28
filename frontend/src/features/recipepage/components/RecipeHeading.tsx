import {
  Box,
  Button,
  ButtonGroup,
  Link,
  Rating,
  Typography,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import RateReviewIcon from '@mui/icons-material/RateReview';

// const testReviews = [
//   {
//     date: 1699142400,
//     displayName: 'John Smith',
//     rating: 5,
//     reviewText: 'This is a great recipe!',
//   },
//   {
//     date: 1699142400,
//     displayName: 'David Kurt',
//     rating: 3,
//     reviewText: 'This recipe is okay.',
//   },
//   {
//     date: 1699142400,
//     displayName: 'Kim R',
//     rating: 5,
//     reviewText: 'This recipe is great.',
//   },
// ] as Array<ExistingReviewState>;

interface RecipeHeadingProps {
  name: string;
  recipeReviews: Array<ReviewState>;
}

export default function RecipeHeading({
  name,
  recipeReviews,
}: RecipeHeadingProps) {
  const numReviews = recipeReviews.length;
  const averageRating =
    recipeReviews
      .map((review) => review.rating)
      .reduce((prev, cur) => (prev += cur)) / numReviews;
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
      <ButtonGroup size='small'>
        <Button startIcon={<RateReviewIcon />}>Rate</Button>
        <Button startIcon={<PrintIcon />}>Print</Button>
        <Button startIcon={<ShareIcon />}>Share</Button>
      </ButtonGroup>
      <img src='/assets/black.jpg'></img>
    </>
  );
}
