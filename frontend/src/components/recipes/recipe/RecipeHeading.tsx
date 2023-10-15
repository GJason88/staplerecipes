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

export default function RecipeHeading() {
  return (
    <>
      <Typography mb={-2} fontSize={38} fontWeight={600}>
        Test Recipe One
      </Typography>
      <Box display='flex'>
        <Rating readOnly />
        <Typography pl={'8px'} pr={'12px'} pt={'2px'}>
          <Link>4.2</Link> (33)
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
