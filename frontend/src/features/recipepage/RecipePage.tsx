import { Container, Stack } from '@mui/material';
import { recipeWidth } from '../../data/constants';
import { useParams } from 'react-router-dom';
import RecipeHeading from './components/RecipeHeading';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import RecipeTools from './components/RecipeTools';
import RecipeInstructions from './components/RecipeInstructions';
import { calculateNutrition } from './helpers/calculateNutrition';
import NutritionLabel from '../../components/nutritionlabel/NutritionLabel';
import useRecipe from '../../hooks/useRecipe';

export default function RecipePage() {
  const routeParams = useParams();
  const recipe = useRecipe(routeParams.id ?? '');
  if (!Object.keys(recipe).length) return <></>;
  console.log(recipe);
  const nutrition = calculateNutrition(recipe.ingredients);

  return (
    <Container sx={{ pt: 10, pb: 10 }}>
      <Stack maxWidth={recipeWidth} gap={2}>
        <RecipeHeading name={recipe.recipeName} />
        <RecipeInfo time={recipe.time} diet={recipe.diet} />
        <Stack flexWrap='wrap' flexDirection='row' gap={1}>
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipeTools tools={recipe.tools} />
        </Stack>
        <RecipeInstructions instructions={recipe.instructions} />
        {Object.values(nutrition).length && (
          <NutritionLabel nutrition={nutrition} />
        )}
      </Stack>
    </Container>
  );
}
