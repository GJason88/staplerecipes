import { Stack } from '@mui/material';
import useRecipes from '../../../../hooks/useRecipes';
import SearchList from '../SearchList/SearchList';
import RecipeForm from './components/RecipeForm';
import { updateRecipeRequest } from './adminRecipesReducer';
import { setRecipe } from '../../../recipepage/recipeReducer';
import { useDispatch } from 'react-redux';

export default function EditRecipe() {
  const dispatch = useDispatch();
  const { recipes, deleteRecipe } = useRecipes();
  const handleItemClick = (index: number) =>
    dispatch(setRecipe(recipes[index]));
  const handleItemDelete = (index: number) =>
    recipes[index].recipeId !== null &&
    deleteRecipe((recipes[index].recipeId as number).toString());
  return (
    <Stack gap={2} flexDirection='row' minHeight={750}>
      <SearchList
        title={'Recipes'}
        items={recipes.map((r) => r.recipeName)}
        handleItemClick={handleItemClick}
        handleItemDelete={handleItemDelete}
      />
      <RecipeForm
        submitBtnText='Update Recipe'
        submitAction={updateRecipeRequest}
      />
    </Stack>
  );
}
