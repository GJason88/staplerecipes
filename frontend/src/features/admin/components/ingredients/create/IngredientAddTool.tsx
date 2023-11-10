import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../..';
import NutritionLabel from '../../../../../components/nutritionlabel/NutritionLabel';
import { useState } from 'react';
import MeasurementList from './MeasurementList';
import useCategories from '../../../../../hooks/useCategories';
import MacroPieChart from '../../../../../components/MacroPieChart';
import {
  createNewIngredientRequest,
  setIngredient,
} from '../adminIngredientsReducer';

export default function IngredientAddTool() {
  const dispatch = useDispatch();
  const [includeVolume, setIncludeVolume] = useState<boolean>(false);
  const ingredient = useSelector<IRootState, IngredientState>(
    (state) => state.adminIngredients.ingredient
  );
  const categories = useCategories('ingredients');
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '75%',
        p: 2,
        justifyContent: 'space-evenly',
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createNewIngredientRequest(ingredient));
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <Box
            display='flex'
            flexDirection='column'
            width='50%'
            minWidth='50%'
            alignItems='center'
          >
            <NutritionLabel
              nutrition={ingredient.nutrientsFor100G}
              center
              minWidth={240}
              maxWidth={330}
              maxHeight={405}
              fs={12}
            />
            <MacroPieChart
              nutrition={ingredient.nutrientsFor100G}
              chartWidth={300}
              chartHeight={200}
              minWidth={240}
              maxWidth={330}
            />
          </Box>
          <Stack gap={4} width='50%' minWidth='50%'>
            <TextField
              value={ingredient.ingredientName}
              onChange={(e) =>
                dispatch(
                  setIngredient({
                    ingredientName: e.target.value,
                  })
                )
              }
              label='Ingredient Name'
              required
            />
            <Autocomplete
              renderInput={(params) => (
                <TextField {...params} label='Category' required />
              )}
              options={categories as Array<CategoryState>}
              getOptionLabel={(option) => option.categoryName}
              isOptionEqualToValue={(option, value) =>
                option.categoryId === value.categoryId
              }
              onChange={(e, value) =>
                dispatch(
                  setIngredient({
                    categoryId: value?.categoryId,
                  })
                )
              }
            />
            <MeasurementList />
            <Stack flexDirection='row'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={includeVolume}
                    onChange={(e) => {
                      setIncludeVolume(e.target.checked);
                      if (!e.target.checked)
                        dispatch(setIngredient({ mlFor100G: 0 }));
                    }}
                  />
                }
                label={'Include Volume'}
              />
              <TextField
                disabled={!includeVolume}
                required={includeVolume}
                label='mL for 100g'
                type='number'
                value={ingredient.mlFor100G}
                onChange={(e) =>
                  dispatch(setIngredient({ mlFor100G: e.target.value }))
                }
              />
            </Stack>
            <Button
              sx={{ width: '70%', alignSelf: 'center' }}
              variant='contained'
              type='submit'
            >
              Create Ingredient
            </Button>
          </Stack>
        </FormControl>
      </form>
    </Paper>
  );
}
