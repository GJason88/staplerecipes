import { createNewRecipeRequest } from './adminRecipesReducer';
import RecipeForm from './components/RecipeForm';

export default function CreateRecipe() {
  return (
    <RecipeForm
      submitBtnText='Create Recipe'
      submitAction={createNewRecipeRequest}
    />
  );
}
