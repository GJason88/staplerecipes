import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import RecipeCard from './RecipeCard';
import { useEffect } from 'react';
import {
  RecipeCardState,
  getAllRecipesRequest,
  updateCreateDialog,
} from '../../redux/components/recipes/recipegridReducer';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';

export default function RecipeGrid() {
  const dispatch = useDispatch();
  const recipeCards = useSelector<IRootState, Array<RecipeCardState>>(
    (state) => state.recipegrid.recipes
  );

  useEffect(() => {
    dispatch(getAllRecipesRequest());
  }, []);

  return (
    <Box
      sx={{ mt: 8 }}
      display='flex'
      justifyContent='flex-start'
      flexWrap='wrap'
    >
      <Card sx={{ m: 1.5, width: 345, height: 320 }}>
        <CardActionArea
          onClick={() => dispatch(updateCreateDialog())}
          sx={{ width: 345, height: 320 }}
        >
          <div style={{ textAlign: 'center' }}>
            <AddBoxTwoToneIcon
              sx={{ width: 200, height: 200 }}
              color='action'
            ></AddBoxTwoToneIcon>
            <Typography gutterBottom variant='h5' component='div'>
              Create New Recipe
            </Typography>
          </div>
        </CardActionArea>
      </Card>
      {recipeCards.map((recipeCard) => (
        <RecipeCard key={recipeCard.id} name={recipeCard.name}></RecipeCard>
      ))}
    </Box>
  );
}
