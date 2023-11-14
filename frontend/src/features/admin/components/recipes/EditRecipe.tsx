import { Stack } from '@mui/material';
import useRecipes from '../../../../hooks/useRecipes';
import SearchList from '../SearchList/SearchList';
import RecipeForm from './components/RecipeForm';
import { updateRecipeRequest } from './adminRecipesReducer';
import { setRecipe } from '../../../recipepage/recipeReducer';
import { useDispatch } from 'react-redux';

export default function EditRecipe() {
  const dispatch = useDispatch();
  const recipes = useRecipes();
  const handleItemClick = (index: number) =>
    dispatch(setRecipe(recipes[index]));
  return (
    <Stack gap={2} flexDirection='row' minHeight={750}>
      <SearchList
        title={'Recipes'}
        items={recipes.map((r) => r.recipeName)}
        onItemClick={handleItemClick}
      />
      <RecipeForm
        submitBtnText='Update Recipe'
        submitAction={updateRecipeRequest}
      />
    </Stack>
  );
}
