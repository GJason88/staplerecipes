import { Stack } from '@mui/material';
import FDCSearch from './FDCSearch';
import IngredientAddTool from './IngredientAddTool';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetIngredient } from '../adminIngredientsReducer';

export default function CreateIngredient() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetIngredient());
    };
  }, [dispatch]);
  return (
    <Stack gap={1} flexDirection='row' minHeight={500} height={750}>
      <FDCSearch />
      <IngredientAddTool />
    </Stack>
  );
}
