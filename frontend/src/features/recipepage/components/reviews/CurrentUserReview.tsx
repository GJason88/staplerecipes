import { IconButton, Stack, Typography } from '@mui/material';
import UserReview from './UserReview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import ReviewForm from './ReviewForm';
import CloseIcon from '@mui/icons-material/Close';
import { User } from 'firebase/auth';

interface CurrentUserReviewProps {
  currentUser: User;
  currentReview: ReviewState;
  handleUpdateReview: (review: ReviewState) => void;
  handleDeleteReview: () => void;
}

export default function CurrentUserReview({
  currentUser,
  currentReview,
  handleUpdateReview,
  handleDeleteReview,
}: CurrentUserReviewProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <Stack sx={{ p: 2, border: '2px solid grey', borderRadius: 5 }} gap={1}>
      <Typography alignSelf={'center'} fontWeight={700}>
        Your Review
      </Typography>
      {isEditMode ? (
        <ReviewForm
          submitFn={handleUpdateReview}
          submitBtnText='Update Review'
          currentUser={currentUser}
          currentReview={currentReview}
        />
      ) : (
        <UserReview {...currentReview} />
      )}
      <Stack flexDirection='row' gap={1}>
        <IconButton onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? <CloseIcon /> : <EditIcon />}
        </IconButton>
        <IconButton onClick={handleDeleteReview}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
