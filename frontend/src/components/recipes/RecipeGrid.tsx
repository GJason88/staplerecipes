import { Box, Card, CardActionArea, Typography } from '@mui/material';
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
import { setRecipeId } from '../../redux/components/recipes/recipeReducer';
import CreateRecipeDialog from './CreateRecipeDialog';

export default function RecipeGrid() {
  const dispatch = useDispatch();
  const recipeCards = useSelector<IRootState, Array<RecipeCardState>>(
    (state) => state.recipegrid.recipes
  );

  useEffect(() => {
    dispatch(setRecipeId('')); // reset id when not on recipe page to prevent creation mishaps
    dispatch(getAllRecipesRequest());
  }, []);

  return (
    <>
      <CreateRecipeDialog />
      <Box
        sx={{ mt: 8 }}
        display='flex'
        justifyContent='flex-start'
        flexWrap='wrap'
      >
        <Card sx={{ m: 1.5, width: 345, height: 320 }}>
          <CardActionArea
            onClick={() => dispatch(updateCreateDialog(true))}
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
          <RecipeCard
            key={recipeCard.recipeId}
            name={recipeCard.recipeName}
            recipeId={recipeCard.recipeId}
          ></RecipeCard>
        ))}
      </Box>
    </>
  );
}
