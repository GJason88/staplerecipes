import { Grid } from '@mui/material';
import RecipeCard from './components/RecipeCard';
import useRecipes from '../../hooks/useRecipes';
import { PlaceholderCard } from './components/styledComponents';

export default function RecipeGridPage() {
  const { recipes } = useRecipes();

  return (
    <Grid container justifyContent='space-between' alignContent='start'>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipeId} name={recipe.recipeName} recipeId={recipe.recipeId}></RecipeCard>
      ))}
      <PlaceholderCard elevation={0} />
    </Grid>
  );
}
