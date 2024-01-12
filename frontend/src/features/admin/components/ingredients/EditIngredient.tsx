import { Stack } from '@mui/material';
import SearchList from '../SearchList/SearchList';
import useIngredients from '../../../../hooks/useIngredients';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import IngredientForm from './IngredientForm';
import { setIngredient } from '../../adminReducer';

export default function EditIngredient() {
  const [ingredientsVisible, setIngredientsVisible] = useState(false);
  const dispatch = useDispatch();
  const { ingredients, updateIngredient, deleteIngredient } = useIngredients();
  useEffect(() => {
    return () => {
      dispatch(setIngredient(null));
    };
  }, [dispatch]);
  const handleIngredientSelect = (index: number) => dispatch(setIngredient(ingredients[index]));
  const handleIngredientDelete = (id: string) => deleteIngredient(id);
  const handleIngredientUpdate = (ingredient: IngredientState) =>
    updateIngredient({
      id: ingredient.ingredientId?.toString() ?? '',
      data: ingredient,
    });
  return (
    <Stack flexDirection='row' minHeight={750}>
      {ingredientsVisible && (
        <SearchList
          title={'Ingredients'}
          items={ingredients.map((i) => ({
            name: i.ingredientName,
            id: i.ingredientId,
          }))}
          open={ingredientsVisible}
          setOpen={setIngredientsVisible}
          handleItemSelect={handleIngredientSelect}
          handleItemDelete={handleIngredientDelete}
        />
      )}
      <IngredientForm
        setSearchVisible={setIngredientsVisible}
        showSearchText='Show Ingredients'
        submitBtnText='Update Ingredient'
        submitFn={handleIngredientUpdate}
      />
    </Stack>
  );
}
