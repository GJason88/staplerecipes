import { Stack } from '@mui/material';
import FDCSearch from './components/FDCSearch';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import IngredientForm from './IngredientForm';
import useIngredients from '../../../../hooks/useIngredients';
import { setIngredient } from '../../adminReducer';

export default function CreateIngredient() {
  const [fdcVisible, setFdcVisible] = useState(false);
  const dispatch = useDispatch();
  const { createIngredient } = useIngredients();
  useEffect(() => {
    return () => {
      dispatch(setIngredient(null)); // will execute on mount in strict mode
    };
  }, [dispatch]);
  const handleIngredientCreate = (ingredient: IngredientState) => createIngredient(ingredient);
  return (
    <Stack flexDirection='row' minHeight={750}>
      {fdcVisible && <FDCSearch open={fdcVisible} setOpen={setFdcVisible} />}
      <IngredientForm
        setSearchVisible={setFdcVisible}
        showSearchText='Show FDC Search'
        submitBtnText='Create Ingredient'
        submitFn={handleIngredientCreate}
      />
    </Stack>
  );
}
