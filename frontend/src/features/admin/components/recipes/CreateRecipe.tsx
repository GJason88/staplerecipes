import { Button, FormControl, Stack } from '@mui/material';
import { recipeWidth } from '../../../../data/constants';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../..';
import { createNewRecipeRequest } from '../../adminReducer';
import EditRecipeInfo from './EditRecipeInfo';
import EditRecipeIngredients from './EditRecipeIngredients';
import EditRecipeTools from './EditRecipeTools';
import EditRecipeInstructions from './EditRecipeInstructions';

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const recipe = useSelector<IRootState, RecipeState>((state) => state.recipe);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewRecipeRequest(recipe));
    // dispatch create new recipe request with recipe
  };
  return (
    <form onSubmit={onSubmit}>
      <FormControl fullWidth>
        <Stack gap={3} alignItems='center'>
          <EditRecipeInfo
            recipeName={recipe.recipeName}
            time={recipe.time}
            diet={recipe.diet}
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
