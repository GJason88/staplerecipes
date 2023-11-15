import { FormControl, Stack, Button } from '@mui/material';
import { recipeWidth } from '../../../../../data/constants';
import EditRecipeInfo from './RecipeInfoField';
import EditRecipeIngredients from './RecipeIngredientsField';
import EditRecipeInstructions from './RecipeInstructionsField';
import EditRecipeTools from './RecipeToolsField';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../..';

export default function RecipeForm({
  submitBtnText,
  submitFn,
}: AdminFormProps) {
  const recipe = useSelector<IRootState, RecipeState>((state) => state.recipe);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFn(recipe);
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
            {submitBtnText}
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
}
