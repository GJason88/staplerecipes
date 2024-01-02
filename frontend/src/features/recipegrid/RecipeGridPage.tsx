import { Grid, Stack } from '@mui/material';
import RecipeCard from './components/RecipeCard';
import useRecipes from '../../hooks/useRecipes';
import { PlaceholderCard } from './components/styledComponents';
import RecipeFilter from './components/RecipeFilter';

export default function RecipeGridPage() {
  const { recipes } = useRecipes();

  return (
    <Stack width='100%'>
      <RecipeFilter />
      <Grid container justifyContent='space-between' alignContent='start'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipeId} name={recipe.recipeName} recipeId={recipe.recipeId}></RecipeCard>
        ))}
        <PlaceholderCard elevation={0} />
      </Grid>
    </Stack>
  );
}
