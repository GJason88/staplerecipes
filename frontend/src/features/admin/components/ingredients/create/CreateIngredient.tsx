import { Stack } from '@mui/material';
import FDCSearch from './FDCSearch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIngredient } from '../adminIngredientsReducer';
import IngredientForm from '../components/IngredientForm';
import useIngredients from '../../../../../hooks/useIngredients';

export default function CreateIngredient() {
  const dispatch = useDispatch();
  const { createIngredient } = useIngredients();
  useEffect(() => {
    return () => {
      dispatch(setIngredient(null)); // will execute on mount in strict mode
    };
  }, [dispatch]);
  const handleIngredientCreate = (ingredient: IngredientState) =>
    createIngredient(ingredient);
  return (
    <Stack flexDirection='row' minHeight={750}>
      <FDCSearch />
      <IngredientForm
        submitBtnText='Create Ingredient'
        submitFn={handleIngredientCreate}
      />
    </Stack>
  );
}
