import {
  Button,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';
import UserReview from './UserReview';
import useAuth from '../../../../hooks/useAuth';
import useUserReview from '../../../../hooks/useUserReview';
import CurrentUserReview from './CurrentUserReview';
import ReviewForm from './ReviewForm';
import { UseMutateFunction } from 'react-query';

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

interface RecipeReviewsProps {
  recipeReviews: Array<ReviewState>;
  recipeId: number | null;
}

export default function RecipeReviews({
  recipeReviews,
  recipeId,
}: RecipeReviewsProps) {
  const { currentUser, setDialogType } = useAuth();
  const { createReview, updateReview, deleteReview } = useUserReview(
    recipeId?.toString() ?? '',
    currentUser?.uid ?? ''
  );
  const userReview = {
    reviewId: 1,
    date: 1699142400,
    displayName: 'Kim R',
    rating: 5,
    reviewText: 'This recipe is great.',
  };

  const handleCreateReview = (data: ReviewState) =>
    createReview({ recipeId: recipeId?.toString() ?? '', data });

  const handleUpdateReview = (data: ReviewState) =>
    updateReview({ reviewId: userReview?.reviewId.toString() ?? '', data });

  const handleDeleteReview = () => {
    const reviewId = userReview?.reviewId.toString() ?? '';
    deleteReview(reviewId);
  };
  return (
    <Paper
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Typography fontSize={18} fontWeight={600}>
        Reviews
      </Typography>
      {currentUser ? (
        Object.keys(userReview).length ? (
          <CurrentUserReview
            currentUser={currentUser}
            currentReview={userReview}
            handleUpdateReview={handleUpdateReview}
            handleDeleteReview={handleDeleteReview}
          />
        ) : (
          <ReviewForm
            currentUser={currentUser}
            submitFn={handleCreateReview}
            submitBtnText='Create Review'
          />
        )
      ) : (
        <Button
          disableRipple
          sx={{ width: '75%', alignSelf: 'center' }}
          onClick={() => setDialogType('form')}
          variant='contained'
        >
          Write a Review
        </Button>
      )}
      <Divider sx={{ backgroundColor: 'darkgrey' }} />
      <List disablePadding>
        {recipeReviews.map((review, index) => (
          <div key={index}>
            <ListItem sx={{ m: 1.5 }} key={index}>
              <UserReview {...review} />
            </ListItem>
            {index < recipeReviews.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  );
}
