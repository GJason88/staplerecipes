import { Box } from '@mui/material';
import RecipeCard from './components/RecipeCard';
import useRecipes from '../../hooks/useRecipes';

export default function RecipeGridPage() {
  const recipes = useRecipes();

  return (
    <>
      <Box
        sx={{ mt: 8 }}
        display='flex'
        justifyContent='flex-start'
        flexWrap='wrap'
      >
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipeId}
            name={recipe.recipeName}
            recipeId={recipe.recipeId}
          ></RecipeCard>
        ))}
      </Box>
    </>
  );
}
