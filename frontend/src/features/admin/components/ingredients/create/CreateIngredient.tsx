import { Stack } from '@mui/material';
import FDCSearch from './FDCSearch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createNewIngredientRequest,
  resetIngredient,
} from '../adminIngredientsReducer';
import IngredientForm from '../components/IngredientForm';

export default function CreateIngredient() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetIngredient()); // will execute on mount in strict mode
    };
  }, [dispatch]);
  return (
    <Stack gap={1} flexDirection='row' minHeight={750}>
      <FDCSearch />
      <IngredientForm
        submitBtnText='Create Ingredient'
        submitAction={createNewIngredientRequest}
      />
    </Stack>
  );
}
