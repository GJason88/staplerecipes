import { Stack } from '@mui/material';
import useRecipes from '../../../../hooks/useRecipes';
import SearchList from '../SearchList/SearchList';
import RecipeForm from './components/RecipeForm';
import { setRecipe } from '../../../recipepage/recipeReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function EditRecipe() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setRecipe(null));
    };
  }, [dispatch]);
  const { recipes, updateRecipe, deleteRecipe } = useRecipes();
  const handleRecipeClick = (index: number) =>
    dispatch(setRecipe(recipes[index]));
  const handleRecipeDelete = (id: string) => deleteRecipe(id);
  const handleRecipeUpdate = (recipe: RecipeState) =>
    updateRecipe({ id: recipe.recipeId?.toString() ?? '', data: recipe });
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
