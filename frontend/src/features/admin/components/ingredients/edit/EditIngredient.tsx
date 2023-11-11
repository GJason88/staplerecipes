import { Stack } from '@mui/material';
import SearchList from '../../SearchList/SearchList';
import useIngredients from '../../../../../hooks/useIngredients';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewIngredientRequest,
  resetIngredient,
  setIngredient,
} from '../adminIngredientsReducer';
import { useEffect } from 'react';
import IngredientForm from '../components/IngredientForm';
import { IRootState } from '../../../../..';

export default function EditIngredient() {
  const dispatch = useDispatch();
  const ingredient = useSelector<IRootState, IngredientState>(
    (state) => state.adminIngredients.ingredient
  );
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewIngredientRequest(ingredient));
  };
  return (
    <Stack gap={1} flexDirection='row' minHeight={750}>
      <SearchList
        title={'Ingredients'}
        items={ingredients.map((i) => i.ingredientName)}
        onItemClick={handleItemClick}
      />
      <IngredientForm
        ingredient={ingredient}
        submitBtnText='Update Ingredient'
        handleSubmit={handleSubmit}
      />
    </Stack>
  );
}
