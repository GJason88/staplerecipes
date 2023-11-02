import { Autocomplete, FormControl, Paper, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../..';
import { setNewIngredient } from '../adminReducer';
import NutritionLabel from '../../../components/nutritionlabel/NutritionLabel';
import { ingredientsApi } from '../../../services/api/server';
import { useQuery } from 'react-query';
import camelcaseKeys from 'camelcase-keys';

const fetchCategories = async () => {
  const response: { data: { data: { [key: string]: string } } } =
    await ingredientsApi.retrieveAllCategories();
  return response.data;
};

export default function IngredientAddTool() {
  const dispatch = useDispatch();
  const ingredient = useSelector<IRootState, NewIngredientState>(
    (state) => state.admin.newIngredient
  );
  const { data } = useQuery('categories', fetchCategories, {
    refetchOnWindowFocus: false,
  });
  const categories = camelcaseKeys(data ?? []);
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
            options={categories as Array<CategoryState>}
            getOptionLabel={(option) => option.categoryName}
            onChange={(e, value) =>
              dispatch(setNewIngredient({ categoryId: value }))
            }
          />
          <NutritionLabel nutrition={ingredient.nutrientsFor100G} />
        </FormControl>
      </form>
    </Paper>
  );
}
