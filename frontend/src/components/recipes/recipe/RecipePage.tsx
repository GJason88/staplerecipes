import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
  Typography,
} from '@mui/material';
import { recipeWidth } from '../../../constants';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import '../../components.scss';
import { useEffect, useState } from 'react';
import useRecipe from '../../../hooks/useRecipe';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setInvalid,
  setRecipeId,
} from '../../../redux/components/recipes/recipeReducer';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const tempData = [
  { name: 'Time', value: '25 minutes' },
  { name: 'Servings', value: '3' },
  { name: 'Diet', value: 'All' },
];

const sizing = {
  margin: { right: 15, top: 15 },
  width: 400,
  height: 300,
  legend: { hidden: true },
};

export default function RecipePage() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipe = useRecipe();
  // const recipeRef = useRef(recipe); // change properties of this in child components
  // TODO: Add useRef after implementing recipepage, since recipe data will be fetched there, so when this page is loaded state will already have recipe data,
  //       which can then be used as initial values for refs which would be defaultValue for uncontrolled components.
  useEffect(() => {
    dispatch(setRecipeId(routeParams.id)); // TODO: Move to recipe onmount since editrecipe is accessed through that page.
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (recipe.invalid) {
      navigate('/recipes');
      dispatch(setInvalid(false));
    }
  }, [dispatch, navigate, recipe.invalid]);

  const [checked, setChecked] = useState([0]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container sx={{ pt: 10, pb: 10 }}>
      <Box
        sx={{ width: 'auto', maxWidth: recipeWidth }}
        className='flexbox vertical'
        gap={2}
      >
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
        <Box display='flex' justifyContent='space-between'>
          {tempData.map((data, index) => (
            <Paper
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                width: '32.666%',
              }}
            >
              <Typography fontSize={18} fontWeight={600}>
                {data.name}:
              </Typography>
              <Typography align='center'>{data.value}</Typography>
            </Paper>
          ))}
        </Box>
        <Paper sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box minWidth={290} width='49%' flexGrow={1} p={3}>
            <Typography fontSize={18} fontWeight={600}>
              Ingredients
            </Typography>
            <List>
              {[0, 1, 2, 3].map((value) => (
                <ListItem key={value} disablePadding>
                  <ListItemButton
                    sx={{
                      p: 0,
                      mb: 1,
                    }}
                    disableRipple
                    onClick={handleToggle(value)}
                  >
                    <ListItemIcon sx={{ mr: -3 }}>
                      <Checkbox
                        sx={{ p: 0, mt: -2 }}
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={`Onion`} // add line and grey through when checked
                      secondary={`2 whole, diced`}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider orientation='vertical' variant='middle' flexItem />
          <Box minWidth={290} width='49%' flexGrow={1} p={3}>
            <Typography fontSize={18} fontWeight={600}>
              Tools
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ p: 3 }}>
          <Typography fontSize={18} fontWeight={600}>
            Instructions
          </Typography>
          <List>
            {[0, 1].map((value) => (
              <ListItem key={value}>
                <Box>
                  <Typography fontWeight={600}>Step {value + 1}</Typography>
                  <Typography>
                    Heat oil in a 4 quart Dutch oven or large pot over
                    medium-high heat until the oil is sizzling hot, about 1
                    minute. Add onion, garlic, carrots, celery and bell pepper.
                    Sauté until tender, about 2-3 minutes.
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 3,
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Box
            width='40%'
            flexGrow={1}
            minWidth={290}
            p={1}
            mb={1}
            sx={{ outline: 'solid dimgrey' }}
          >
            <Typography mt={-1} mb={-1} fontSize={38} fontWeight={1000}>
              Nutrition Facts
            </Typography>
            <Divider sx={{ mt: 1, mb: 1, borderColor: 'dimgrey' }} />
            <Typography fontSize={14} fontWeight={600}>
              Amount Per Serving
            </Typography>
            <Box display='flex' justifyContent='space-between'>
              <Typography fontSize={26} fontWeight={1000}>
                Calories
              </Typography>
              <Typography fontSize={26} fontWeight={1000}>
                230
              </Typography>
            </Box>
            <Divider
              sx={{ mb: 1, borderColor: 'dimgrey', borderBottomWidth: 5 }}
            />
            <Typography align='right' fontSize={16}>
              <strong>% Daily Value*</strong>
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Box display='flex' justifyContent='space-between'>
              <Typography pr={1} fontSize={16}>
                <strong>Total Fat</strong> 7g
              </Typography>
              <Typography pr={1} fontSize={16} fontWeight={600}>
                10%
              </Typography>
            </Box>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Typography pl={2} fontSize={16}>
              Saturated Fat 6g
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Typography fontSize={16}>
              <strong>Cholesterol</strong> 0mg
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Typography fontSize={16}>
              <strong>Sodium</strong> 50mg
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Typography fontSize={16}>
              <strong>Total Carbohydrate</strong> 42g
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Typography pl={2} fontSize={16}>
              Dietary Fiber 2g
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Typography pl={2} fontSize={16}>
              Total Sugars 6g
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Typography fontSize={16}>
              <strong>Protein</strong> 12g
            </Typography>
            <Divider
              sx={{
                mt: 1,
                mb: 1,
                borderColor: 'dimgrey',
                borderBottomWidth: 10,
              }}
            />
            <Typography fontSize={16}>Vitamin C 12mg</Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
            <Typography fontSize={16}>Vitamin D 12mcg</Typography>
            <Divider
              sx={{
                mt: 1,
                mb: 1,
                borderColor: 'dimgrey',
                borderBottomWidth: 5,
              }}
            />
            <Typography fontSize={10}>
              The % Daily Value (DV) tells you how much a nutrient in a serving
              of food contributes to a daily diet. 2,000 calories a day is used
              for general nutrition advice.
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            width='50%'
            flexGrow={1}
          >
            <Typography fontSize={24} fontWeight={600}>
              Caloric Distribution
            </Typography>
            <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.value}% ${item.label}`,
                  data: [
                    { id: 0, value: 20, label: 'Fat', color: 'orange' },
                    { id: 1, value: 50, label: 'Carbs', color: 'tan' },
                    { id: 2, value: 30, label: 'Protein', color: 'darkred' },
                  ],
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: 'white',
                  fontSize: 14,
                },
              }}
              {...sizing}
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
