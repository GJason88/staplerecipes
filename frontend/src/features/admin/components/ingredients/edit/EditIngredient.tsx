import { Stack } from '@mui/material';
import SearchList from '../../SearchList/SearchList';
import useIngredients from '../../../../../hooks/useIngredients';
import { useDispatch } from 'react-redux';
import {
  resetIngredient,
  setIngredient,
  updateIngredientRequest,
} from '../adminIngredientsReducer';
import { useEffect } from 'react';
import IngredientForm from '../components/IngredientForm';

export default function EditIngredient() {
  const dispatch = useDispatch();
  const ingredients = useIngredients();
  useEffect(() => {
    return () => {
      dispatch(resetIngredient());
    };
  }, [dispatch]);
  const handleItemClick = (index: number) => {
    const ingredient = ingredients[index];
    dispatch(setIngredient(ingredient));
  };
  return (
    <Stack gap={1} flexDirection='row' minHeight={750}>
      <SearchList
        title={'Ingredients'}
        items={ingredients.map((i) => i.ingredientName)}
        onItemClick={handleItemClick}
      />
      <IngredientForm
        submitBtnText='Update Ingredient'
        submitAction={updateIngredientRequest}
      />
    </Stack>
  );
}
