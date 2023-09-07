import { Card, CardActionArea, Grid, Typography } from '@mui/material';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import RecipeCard from './RecipeCard';
import { useEffect } from 'react';
import {
  RecipeState,
  updateCreateDialog,
} from '../../redux/components/recipes/recipegridReducer';
import { useDispatch } from 'react-redux';

export default function RecipeGrid() {
  const dispatch = useDispatch();
  // const recipes: Array<RecipeState> = [];
  useEffect(() => {
    // Call saga to fetch recipes here
  }, []);
  return (
    <Grid sx={{ marginTop: 6, padding: 3 }} container spacing={2}>
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
      {/* {recipes.map((recipe) => (
        <Grid item sx={{ flexGrow: 1 }} key={recipe.id}>
          <RecipeCard name={recipe.name}></RecipeCard>
        </Grid>
      ))} */}
      <Grid item sx={{ flexGrow: 1 }}>
        <RecipeCard name='Test'></RecipeCard>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <RecipeCard name='Test'></RecipeCard>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <RecipeCard name='Test'></RecipeCard>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <RecipeCard name='Test'></RecipeCard>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <RecipeCard name='Test'></RecipeCard>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <RecipeCard name='Test'></RecipeCard>
      </Grid>
    </Grid>
  );
}
