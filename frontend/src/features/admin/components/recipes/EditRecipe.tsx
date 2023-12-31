import { Stack } from '@mui/material';
import useRecipes from '../../../../hooks/useRecipes';
import SearchList from '../SearchList/SearchList';
import RecipeForm from './RecipeForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setRecipe } from '../../adminReducer';

export default function EditRecipe() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setRecipe(null));
    };
  }, [dispatch]);
  const { recipes, updateRecipe, deleteRecipe } = useRecipes();
  const handleRecipeClick = (index: number) => dispatch(setRecipe(recipes[index]));
  const handleRecipeDelete = (recipeId: string) => {
    dispatch(setRecipe(null));
    deleteRecipe(recipeId);
  };
  const handleRecipeUpdate = (recipe: RecipeState, image: File | null) =>
    recipe.recipeId && updateRecipe({ recipeId: recipe.recipeId, data: recipe, image });
  return (
    <Stack gap={2} flexDirection='row' minHeight={750}>
      <SearchList
        title={'Recipes'}
        items={recipes.map((r) => ({ name: r.recipeName, id: r.recipeId }))}
        handleItemSelect={handleRecipeClick}
        handleItemDelete={handleRecipeDelete}
      />
      <RecipeForm submitBtnText='Update Recipe' submitFn={handleRecipeUpdate} />
    </Stack>
  );
}
