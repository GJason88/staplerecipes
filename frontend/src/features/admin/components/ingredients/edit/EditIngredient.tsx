import { Stack } from '@mui/material';
import SearchList from '../../../../../components/SearchList/SearchList';
import useIngredients from '../../../../../hooks/useIngredients';
import { useDispatch } from 'react-redux';
import { resetIngredient, setIngredient } from '../adminIngredientsReducer';
import { useEffect } from 'react';

export default function EditIngredient() {
  const dispatch = useDispatch();
  const ingredients = useIngredients();
  const handleItemClick = (index: number) => {
    const ingredient = ingredients[index];
    dispatch(setIngredient(ingredient));
  };
  useEffect(() => {
    return () => {
      dispatch(resetIngredient());
    };
  }, [dispatch]);

  return (
    <Stack gap={1} flexDirection='row' minHeight={500} height={750}>
      <SearchList
        title={'Ingredients'}
        items={ingredients.map((i) => i.ingredientName)}
        onItemClick={handleItemClick}
      />
    </Stack>
  );
}
