import {
  Stack,
  Box,
  TextField,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  FormControl,
  Paper,
  Button,
} from '@mui/material';
import NutritionLabel from '../../../../../components/nutritionlabel/NutritionLabel';
import { setIngredient } from '../adminIngredientsReducer';
import MeasurementList from '../create/MeasurementList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useCategories from '../../../../../hooks/useCategories';

interface EditableIngredientProps {
  ingredient: IngredientState;
  submitBtnText: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function IngredientForm({
  ingredient,
  submitBtnText,
  handleSubmit,
}: EditableIngredientProps) {
  const dispatch = useDispatch();
  const [includeVolume, setIncludeVolume] = useState<boolean>(false);
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
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            flexWrap: 'wrap',
            gap: 6,
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            <Box
              display='flex'
              width='48%'
              flexGrow={1}
              alignItems='center'
              justifyContent='center'
            >
              <NutritionLabel
                nutrition={ingredient.nutrientsFor100G}
                center
                minWidth={240}
                maxWidth={330}
                maxHeight={405}
                fs={12}
              />
            </Box>
            <Stack gap={4} width='48%' flexGrow={1}>
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
                // have categorystate and use for ingredient category
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
            </Stack>
          </Stack>
          <Button
            sx={{ width: '70%', alignSelf: 'center' }}
            variant='contained'
            type='submit'
          >
            {submitBtnText}
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
}
