import { Stack } from '@mui/material';
import SearchList from '../../SearchList/SearchList';
import useIngredients from '../../../../../hooks/useIngredients';
import { useDispatch } from 'react-redux';
import { setIngredient } from '../adminIngredientsReducer';
import { useEffect } from 'react';
import IngredientForm from '../components/IngredientForm';

export default function EditIngredient() {
  const dispatch = useDispatch();
  const { ingredients, updateIngredient, deleteIngredient } = useIngredients();
  useEffect(() => {
    return () => {
      dispatch(setIngredient(null));
    };
  }, [dispatch]);
  const handleItemClick = (index: number) =>
    dispatch(setIngredient(ingredients[index]));
  const handleItemDelete = (index: number) =>
    ingredients[index].ingredientId !== null &&
    deleteIngredient((ingredients[index].ingredientId as number).toString());
  const handleIngredientUpdate = (ingredient: IngredientState) =>
    updateIngredient({
      id: ingredient.ingredientId?.toString() ?? '',
      data: ingredient,
    });
  return (
    <Stack flexDirection='row' minHeight={750}>
      <SearchList
        title={'Ingredients'}
        items={ingredients.map((i) => i.ingredientName)}
        handleItemClick={handleItemClick}
        handleItemDelete={handleItemDelete}
      />
      <IngredientForm
        submitBtnText='Update Ingredient'
        submitFn={handleIngredientUpdate}
      />
    </Stack>
  );
}
