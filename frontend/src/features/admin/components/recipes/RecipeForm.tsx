import { Stack, Button } from '@mui/material';
import EditRecipeInfo from './components/RecipeInfoField';
import EditRecipeIngredients from './components/RecipeIngredientsField';
import EditRecipeInstructions from './components/RecipeInstructionsField';
import EditRecipeTools from './components/RecipeToolsField';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../..';
import { useState } from 'react';

interface RecipeFormProps {
  submitBtnText: string;
  submitFn: (data: RecipeState, image: File | null) => void;
}

export default function RecipeForm({ submitBtnText, submitFn }: RecipeFormProps) {
  const [image, setImage] = useState<File | null>(null);
  const recipe = useSelector<IRootState, RecipeState>((state) => state.admin.recipe);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFn(recipe, image);
  };
  return (
    <form onSubmit={onSubmit}>
      <Stack gap={3} alignItems='center'>
        <EditRecipeInfo
          recipeId={recipe.recipeId}
          recipeName={recipe.recipeName}
          time={recipe.time}
          diet={recipe.diet}
          servings={recipe.servings}
          image={image}
          setImage={setImage}
        />
        <EditRecipeIngredients recipeIngredients={recipe.ingredients} />
        <EditRecipeTools recipeTools={recipe.tools} />
        <EditRecipeInstructions recipeInstructions={recipe.instructions} />
        <Button type='submit' variant='contained' fullWidth>
          {submitBtnText}
        </Button>
      </Stack>
    </form>
  );
}
