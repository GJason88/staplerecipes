import { useDispatch } from 'react-redux';
import RecipeForm from './RecipeForm';
import { useEffect } from 'react';
import useRecipes from '../../../../hooks/useRecipes';
import { setRecipe } from '../../adminReducer';
import { setResult } from '../../../../services/api/serviceReducer';

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const { createRecipe } = useRecipes();
  useEffect(() => {
    return () => {
      dispatch(setRecipe(null));
    };
  }, [dispatch]);
  const handleCreateRecipe = (recipe: RecipeState, image: File | null) => {
    if (!recipe.recipeName || !recipe.ingredients.length || !recipe.instructions.length) {
      dispatch(
        setResult({
          message: 'Missing name, ingredients, and/or instructions',
          severity: 'error',
        })
      );
      return;
    }
    createRecipe({ data: recipe, image });
  };

  return <RecipeForm submitBtnText='Create Recipe' submitFn={handleCreateRecipe} />;
}
