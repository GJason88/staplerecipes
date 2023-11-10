import { Stack } from '@mui/material';
import SearchList from '../../../../../components/SearchList/SearchList';
import useIngredients from '../../../../../hooks/useIngredients';
import { useDispatch } from 'react-redux';
import { setIngredient } from '../adminIngredientsReducer';

export default function EditIngredient() {
  const dispatch = useDispatch();
  const ingredients = useIngredients();
  const handleItemClick = (index: number) => {
    const ingredient = ingredients[index];
    dispatch(setIngredient(ingredient));
  };
  return (
    <Stack gap={1} flexDirection='row' minHeight={500} height={750}>
      <SearchList
        items={ingredients.map((i) => i.ingredientName)}
        onItemClick={handleItemClick}
      />
    </Stack>
  );
}
