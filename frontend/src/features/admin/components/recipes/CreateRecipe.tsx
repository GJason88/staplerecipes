import { useDispatch } from 'react-redux';
import RecipeForm from './RecipeForm';
import { useEffect } from 'react';
import useRecipes from '../../../../hooks/useRecipes';
import { setRecipe } from '../../adminReducer';

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
