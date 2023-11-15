import { useDispatch } from 'react-redux';
import { createNewRecipeRequest } from './adminRecipesReducer';
import RecipeForm from './components/RecipeForm';

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const handleCreateRecipe = (recipe: RecipeState) =>
    dispatch(createNewRecipeRequest(recipe));
  return (
    <RecipeForm submitBtnText='Create Recipe' submitFn={handleCreateRecipe} />
  );
}
