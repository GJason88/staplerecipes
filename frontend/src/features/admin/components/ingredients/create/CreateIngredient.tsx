import { Stack } from '@mui/material';
import FDCSearch from './FDCSearch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewIngredientRequest,
  resetIngredient,
} from '../adminIngredientsReducer';
import IngredientForm from '../components/IngredientForm';
import { IRootState } from '../../../../..';

export default function CreateIngredient() {
  const dispatch = useDispatch();
  const ingredient = useSelector<IRootState, IngredientState>(
    (state) => state.adminIngredients.ingredient
  );
  useEffect(() => {
    return () => {
      dispatch(resetIngredient()); // will execute on mount in strict mode
    };
  }, [dispatch]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewIngredientRequest(ingredient));
  };
  return (
    <Stack gap={1} flexDirection='row' minHeight={750}>
      <FDCSearch />
      <IngredientForm
        ingredient={ingredient}
        submitBtnText='Create Ingredient'
        handleSubmit={handleSubmit}
      />
    </Stack>
  );
}
