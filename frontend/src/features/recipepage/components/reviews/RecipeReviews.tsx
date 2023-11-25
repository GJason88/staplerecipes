import {
  Button,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';
import UserReview from './UserReview';
import CreateReview from './CreateReview';
import useReviews from '../../../../hooks/useReviews';
import useAuth from '../../../../hooks/useAuth';

const testReviews = [
  {
    date: new Date(2023, 11, 24),
    displayName: 'John Smith',
    rating: 5,
    reviewText: 'This is a great recipe!',
  },
  {
    date: new Date(2023, 11, 21),
    displayName: 'David Kurt',
    rating: 3,
    reviewText: 'This recipe is okay.',
  },
] as Array<ReviewState>;

export default function RecipeReviews() {
  const reviews = useReviews();
  const { currentUser, setDialogType } = useAuth();
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
        <CreateReview />
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
        {testReviews.map((review, index) => (
          <div key={index}>
            <ListItem sx={{ m: 1.5 }} key={index}>
              <UserReview {...review} />
            </ListItem>
            {index < testReviews.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  );
}
