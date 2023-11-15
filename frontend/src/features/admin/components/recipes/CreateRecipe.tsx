import { useDispatch } from 'react-redux';
import RecipeForm from './components/RecipeForm';
import { useEffect } from 'react';
import { setRecipe } from '../../../recipepage/recipeReducer';
import useRecipes from '../../../../hooks/useRecipes';

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const { createRecipe } = useRecipes();
  useEffect(() => {
    return () => {
      dispatch(setRecipe(null));
    };
  }, [dispatch]);
  const handleCreateRecipe = (recipe: RecipeState) => createRecipe(recipe);
  return (
    <RecipeForm submitBtnText='Create Recipe' submitFn={handleCreateRecipe} />
  );
}
