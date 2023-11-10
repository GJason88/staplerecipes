import { Container, Stack } from '@mui/material';
import { recipeWidth } from '../../data/constants';
import { useParams } from 'react-router-dom';
import RecipeHeading from './components/RecipeHeading';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import RecipeTools from './components/RecipeTools';
import RecipeInstructions from './components/RecipeInstructions';
import useRecipe from '../../hooks/useRecipe';
import RecipeNutrition from './components/RecipeNutrition';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRecipe } from './recipeReducer';

export default function RecipePage() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const recipe = useRecipe(routeParams.id ?? '');

  useEffect(() => {
    return () => {
      dispatch(setRecipe({}));
    };
  }, [dispatch]);
  if (!Object.keys(recipe).length) return <></>;
  return (
    <Container sx={{ pt: 10, pb: 10 }}>
      <Stack maxWidth={recipeWidth} gap={2}>
        <RecipeHeading name={recipe.recipeName} />
        <RecipeInfo
          time={recipe.time}
          diet={recipe.diet}
          servings={recipe.servings}
        />
        <Stack flexWrap='wrap' flexDirection='row' gap={1}>
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipeTools tools={recipe.tools} />
        </Stack>
        <RecipeInstructions instructions={recipe.instructions} />
        <RecipeNutrition ingredients={recipe.ingredients} />
      </Stack>
    </Container>
  );
}
