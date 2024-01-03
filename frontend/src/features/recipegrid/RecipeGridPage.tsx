import { Grid, Stack } from '@mui/material';
import RecipeCard from './components/RecipeCard';
import useRecipes from '../../hooks/useRecipes';
import { PlaceholderCard } from './components/styledComponents';
import RecipeFilter from './components/RecipeFilter';
import { useState } from 'react';

export default function RecipeGridPage() {
  const [filter, setFilter] = useState('');
  const { recipes } = useRecipes();
  return (
    <Stack width='100%'>
      <RecipeFilter setFilter={setFilter} />
      <Grid container justifyContent='space-between' alignContent='start'>
        {recipes.map(
          (recipe) =>
            (!filter || recipe.recipeName.includes(filter)) && (
              <RecipeCard key={recipe.recipeId} name={recipe.recipeName} recipeId={recipe.recipeId}></RecipeCard>
            )
        )}
        <PlaceholderCard elevation={0} />
      </Grid>
    </Stack>
  );
}
