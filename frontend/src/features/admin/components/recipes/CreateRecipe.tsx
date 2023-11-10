import { Button, FormControl, Stack } from '@mui/material';
import { recipeWidth } from '../../../../data/constants';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../..';
import EditRecipeInfo from './components/RecipeInfoField';
import EditRecipeIngredients from './components/RecipeIngredientsField';
import EditRecipeTools from './components/RecipeToolsField';
import EditRecipeInstructions from './components/RecipeInstructionsField';
import { createNewRecipeRequest } from './adminRecipesReducer';

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const recipe = useSelector<IRootState, RecipeState>((state) => state.recipe);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewRecipeRequest(recipe));
  };
  return (
    <form onSubmit={onSubmit}>
      <FormControl fullWidth>
        <Stack gap={3} alignItems='center'>
          <EditRecipeInfo
            recipeName={recipe.recipeName}
            time={recipe.time}
            diet={recipe.diet}
            servings={recipe.servings}
          />
          <EditRecipeIngredients recipeIngredients={recipe.ingredients} />
          <EditRecipeTools recipeTools={recipe.tools} />
          <EditRecipeInstructions instructions={recipe.instructions} />
          <Button
            type='submit'
            variant='contained'
            sx={{ width: recipeWidth, mb: 3 }}
          >
            Create Recipe
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
}
