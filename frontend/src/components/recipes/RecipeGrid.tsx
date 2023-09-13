import { Card, CardActionArea, Grid, Typography } from '@mui/material';
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
    <Grid sx={{ marginTop: 6, p: 3 }} container spacing={2}>
      <Grid item sx={{ alignSelf: 'center', flexGrow: 1 }}>
        <Card sx={{ width: 345, height: 320 }}>
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
      </Grid>
      {recipeCards.map((recipeCard) => (
        <Grid item sx={{ flexGrow: 1 }} key={recipeCard.id}>
          <RecipeCard name={recipeCard.name}></RecipeCard>
        </Grid>
      ))}
    </Grid>
  );
}
