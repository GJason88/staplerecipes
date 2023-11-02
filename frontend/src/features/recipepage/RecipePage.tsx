import { Container, Stack } from '@mui/material';
import { recipeWidth } from '../../data/constants';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setInvalid, setRecipeId } from './recipeReducer';
import RecipeHeading from './components/RecipeHeading';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import RecipeTools from './components/RecipeTools';
import RecipeInstructions from './components/RecipeInstructions';
import { calculateNutrition } from './helpers/calculateNutrition';
import { IRootState } from '../..';
import NutritionLabel from '../../components/nutritionlabel/NutritionLabel';

export default function RecipePage() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipe = useSelector<IRootState, RecipeState>((state) => state.recipe);
  const nutrition = calculateNutrition(recipe.ingredients);
  useEffect(() => {
    dispatch(setRecipeId(routeParams.id));
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (recipe.invalid) {
      navigate('/recipes');
      dispatch(setInvalid(false));
    }
  }, [dispatch, navigate, recipe.invalid]);

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
