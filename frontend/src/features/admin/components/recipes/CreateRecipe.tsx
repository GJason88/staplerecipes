import { useDispatch } from 'react-redux';
import { createNewRecipeRequest } from './adminRecipesReducer';
import RecipeForm from './components/RecipeForm';
import { useEffect } from 'react';
import { setRecipe } from '../../../recipepage/recipeReducer';

export default function CreateRecipe() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setRecipe(null));
    };
  }, [dispatch]);
  const handleCreateRecipe = (recipe: RecipeState) =>
    dispatch(createNewRecipeRequest(recipe));
  return (
    <RecipeForm submitBtnText='Create Recipe' submitFn={handleCreateRecipe} />
  );
}
