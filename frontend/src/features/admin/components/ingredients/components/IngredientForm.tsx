import {
  Stack,
  Box,
  TextField,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  FormControl,
  Button,
} from '@mui/material';
import NutritionLabel from '../../../../../components/nutritionlabel/NutritionLabel';
import { setIngredient } from '../adminIngredientsReducer';
import MeasurementList from '../create/MeasurementList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCategories from '../../../../../hooks/useCategories';
import { IRootState } from '../../../../..';

export default function IngredientForm({
  submitBtnText,
  submitAction,
}: AdminFormProps) {
  const ingredient = useSelector<IRootState, IngredientState>(
    (state) => state.adminIngredients.ingredient
  );
  const [includeVolume, setIncludeVolume] = useState<boolean>(false);
  const dispatch = useDispatch();
  const categories = useCategories('ingredients');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitAction(ingredient));
  };
  useEffect(
    () => setIncludeVolume(Boolean(ingredient.mlFor100G)),
    [ingredient]
  );
  return (
    <Box
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
            gap: 6,
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            <Box
              display='flex'
              flexGrow={1}
              alignItems='center'
              justifyContent='center'
              minWidth={240}
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
            <Stack gap={4} flexGrow={1}>
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
                value={
                  ingredient.category.categoryId ? ingredient.category : null
                }
                onChange={(e, value) =>
                  dispatch(
                    setIngredient({
                      category: {
                        ...ingredient.category,
                        categoryName: value?.categoryName ?? '',
                        categoryId: value?.categoryId ?? null,
                      },
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
    </Box>
  );
}
