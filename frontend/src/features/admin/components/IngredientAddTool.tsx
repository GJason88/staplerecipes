import { Autocomplete, FormControl, Paper, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../..';
import { useEffect } from 'react';
import { getCategoriesRequest } from '../../ingredients/ingredientsReducer';
import { setNewIngredient } from '../adminReducer';
import NutritionLabel from '../../../components/NutritionLabel/NutritionLabel';

export default function IngredientAddTool() {
  const dispatch = useDispatch();
  const ingredient = useSelector<IRootState, NewIngredientState>(
    (state) => state.admin.newIngredient
  );
  const categories = useSelector<IRootState, Array<CategoryState>>(
    (state) => state.ingredients.categories
  );
  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  return (
    <Paper
      elevation={3}
      sx={{
        flexGrow: 1,
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <form>
        <FormControl sx={{ width: '100%', gap: 1 }}>
          <TextField
            value={ingredient.ingredientName}
            onChange={(e) =>
              dispatch(setNewIngredient({ ingredientName: e.target.value }))
            }
            label='Ingredient Name'
            sx={{ width: '40%' }}
          />
          <Autocomplete
            renderInput={(params) => <TextField {...params} label='Category' />}
            options={categories}
            getOptionLabel={(option) => option.categoryName}
            onChange={(e, value) =>
              dispatch(setNewIngredient({ categoryId: value }))
            }
          />
          <NutritionLabel nutrition={} />
        </FormControl>
      </form>
    </Paper>
  );
}
