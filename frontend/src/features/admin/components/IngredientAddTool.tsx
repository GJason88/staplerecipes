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
import { IRootState } from '../../..';
import { setNewIngredient } from '../adminReducer';
import NutritionLabel from '../../../components/nutritionlabel/NutritionLabel';
import { useState } from 'react';
import MeasurementList from './MeasurementList';
import useCategories from '../../../hooks/useCategories';
import MacroPieChart from '../../../components/MacroPieChart';

export default function IngredientAddTool() {
  const [includeVolume, setIncludeVolume] = useState<boolean>(false);
  const dispatch = useDispatch();
  const ingredient = useSelector<IRootState, NewIngredientState>(
    (state) => state.admin.newIngredient
  );
  const categories = useCategories('ingredients');
  return (
    <Paper
      elevation={3}
      sx={{
        flexGrow: 1,
        width: '75%',
        p: 2,
      }}
    >
      <form>
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <Box display='flex' flexDirection='column' width='50%' minWidth='50%'>
            <NutritionLabel
              nutrition={ingredient.nutrientsFor100G}
              center
              minWidth={240}
              maxWidth={330}
              fs={12}
            />
            <MacroPieChart // box around?
              nutrition={ingredient.nutrientsFor100G}
              chartWidth={300}
              chartHeight={200}
              minWidth={240}
              maxWidth={330}
              center
            />
          </Box>
          <Stack gap={4} width='50%' minWidth='50%'>
            <TextField
              value={ingredient.ingredientName}
              onChange={(e) =>
                dispatch(setNewIngredient({ ingredientName: e.target.value }))
              }
              label='Ingredient Name'
            />
            <Autocomplete
              renderInput={(params) => (
                <TextField {...params} label='Category' />
              )}
              options={categories as Array<CategoryState>}
              getOptionLabel={(option) => option.categoryName}
              onChange={(e, value) =>
                dispatch(setNewIngredient({ categoryId: value }))
              }
            />
            <MeasurementList />
            <Stack flexDirection='row'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={includeVolume}
                    onChange={(e) => setIncludeVolume(e.target.checked)}
                  />
                }
                label={'Include Volume'}
              />
              <TextField
                disabled={!includeVolume}
                label='mL for 100g'
                type='number'
                onChange={(e) =>
                  dispatch(setNewIngredient({ mlFor100G: e.target.value }))
                }
              />
            </Stack>
            <Button variant='contained'>Create Ingredient</Button>
          </Stack>
        </FormControl>
      </form>
    </Paper>
  );
}
