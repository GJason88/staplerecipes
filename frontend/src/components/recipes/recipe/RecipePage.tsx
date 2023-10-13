import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Link,
  Paper,
  Rating,
  Typography,
} from '@mui/material';
import { recipeWidth } from '../../../constants';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function RecipePage() {
  return (
    <Container sx={{ pt: 10 }}>
      <Box display='flex' flexDirection='column' gap={2}>
        <Typography fontSize={38} fontWeight={600}>
          Test Recipe One
          <Box display='flex'>
            <Rating readOnly />
            <Typography pl={'8px'} pr={'12px'} pt={'2px'}>
              <Link>4.2</Link> (33)
            </Typography>
          </Box>
        </Typography>
        <Button
          startIcon={<BookmarkBorderIcon />}
          variant='outlined'
          sx={{ width: 200 }}
        >
          Save Recipe
        </Button>
        <ButtonGroup size='small' aria-label='small button group'>
          <Button startIcon={<RateReviewIcon />}>Rate</Button>
          <Button startIcon={<PrintIcon />}>Print</Button>
          <Button startIcon={<ShareIcon />}>Share</Button>
        </ButtonGroup>
        <img width={recipeWidth} height={400} src='/assets/black.jpg'></img>
        <Paper sx={{ p: 3, width: recipeWidth }}>
          <Box display='flex' justifyContent='space-evenly'>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              pr={5}
            >
              <Typography fontSize={18} fontWeight={600}>
                Time:
              </Typography>
              <Typography>25 minutes</Typography>
            </Box>
            <Divider orientation='vertical' flexItem />
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              pl={5}
            >
              <Typography fontSize={18} fontWeight={600}>
                Servings:
              </Typography>
              <Typography fontSize={18}>3</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
