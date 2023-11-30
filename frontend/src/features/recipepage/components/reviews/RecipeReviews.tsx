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

interface RecipeReviewsProps {
  reviewsRef: React.MutableRefObject<HTMLDivElement | null>;
  recipeReviews: Array<ReviewState>;
  recipeId: string;
}

export default function RecipeReviews({
  reviewsRef,
  recipeReviews,
  recipeId,
}: RecipeReviewsProps) {
  const { currentUser, setDialogType } = useAuth();
  const { userReview, createReview, updateReview, deleteReview } =
    useUserReview(recipeId);

  return (
    <div ref={reviewsRef}>
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
              handleUpdateReview={(data: ReviewState) =>
                updateReview({ recipeId: recipeId, data })
              }
              handleDeleteReview={() => deleteReview(recipeId)}
            />
          ) : (
            <ReviewForm
              currentUser={currentUser}
              submitFn={(data: ReviewState) =>
                createReview({ recipeId: recipeId, data })
              }
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
    </div>
  );
}
