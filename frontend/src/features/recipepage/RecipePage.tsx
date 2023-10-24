import { Container, Stack } from '@mui/material';
import { recipeWidth } from '../../data/constants';
import { useEffect } from 'react';
import useRecipe from '../../hooks/useRecipe';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInvalid, setRecipeId } from './recipeReducer';
import RecipeHeading from './components/RecipeHeading';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import RecipeTools from './components/RecipeTools';
import RecipeInstructions from './components/RecipeInstructions';
import NutritionLabel from '../../components/NutritionLabel';

export default function RecipePage() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipe = useRecipe();
  // const recipeRef = useRef(recipe); // change properties of this in child components
  // TODO: Add useRef after implementing recipepage, since recipe data will be fetched there, so when this page is loaded state will already have recipe data,
  //       which can then be used as initial values for refs which would be defaultValue for uncontrolled components.
  useEffect(() => {
    dispatch(setRecipeId(routeParams.id)); // TODO: Move to recipe onmount since editrecipe is accessed through that page.
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
        <RecipeInstructions />
        <NutritionLabel />
      </Stack>
    </Container>
  );
}
