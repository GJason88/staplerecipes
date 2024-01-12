import { Stack, TextField, Autocomplete, FormControlLabel, Checkbox, Button } from '@mui/material';
import NutritionLabel from '../../../../components/nutritionlabel/NutritionLabel';
import MeasurementList from './components/MeasurementList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCategories from '../../../../hooks/useCategories';
import { IRootState } from '../../../..';
import { setIngredient } from '../../adminReducer';
import { CreateIngredientStack } from '../styledComponents';

interface IngredientFormProps {
  setSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
  showSearchText: string;
  submitBtnText: string;
  submitFn: (data: IngredientState) => void;
}

export default function IngredientForm({
  setSearchVisible,
  showSearchText,
  submitBtnText,
  submitFn,
}: IngredientFormProps) {
  const ingredient = useSelector<IRootState, IngredientState>((state) => state.admin.ingredient);
  const [includeVolume, setIncludeVolume] = useState<boolean>(false);
  const dispatch = useDispatch();
  const categories = useCategories('ingredients');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFn(ingredient);
  };
  useEffect(() => setIncludeVolume(Boolean(ingredient.mlFor100G)), [ingredient]);
  return (
    <Stack gap='16px' alignItems='center' width='100%'>
      <Button fullWidth variant='outlined' onClick={() => setSearchVisible(true)}>
        {showSearchText}
      </Button>
      <CreateIngredientStack>
        <NutritionLabel width='60%' nutrition={ingredient.nutrientsFor100G} />
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Stack gap='16px'>
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
              renderInput={(params) => <TextField {...params} label='Category' required />}
              options={categories}
              getOptionLabel={(option) => option.categoryName}
              isOptionEqualToValue={(option, value) => option.categoryId === value.categoryId}
              value={ingredient.category.categoryId ? ingredient.category : null}
              onChange={(e, value) =>
                dispatch(
                  setIngredient({
                    category: {
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
                      if (!e.target.checked) dispatch(setIngredient({ mlFor100G: 0 }));
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
                onChange={(e) => dispatch(setIngredient({ mlFor100G: e.target.value }))}
              />
            </Stack>
            <Button sx={{ width: '70%', alignSelf: 'center' }} variant='contained' type='submit'>
              {submitBtnText}
            </Button>
          </Stack>
        </form>
      </CreateIngredientStack>
    </Stack>
  );
}
