import {
  Stack,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Box,
} from '@mui/material';
import { useRef } from 'react';
import { Delete } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setIngredient } from '../adminIngredientsReducer';
import { IRootState } from '../../../../..';

export default function MeasurementList() {
  const dispatch = useDispatch();
  const ingredient = useSelector<IRootState, IngredientState>(
    (state) => state.adminIngredients.ingredient
  );
  const measurementName = useRef({ value: '' });
  const measurementGrams = useRef({ value: 0 });
  const addMeasurement = () =>
    measurementName.current.value &&
    measurementGrams.current.value &&
    dispatch(
      setIngredient({
        additionalMeasurements: {
          ...ingredient.additionalMeasurements,
          [measurementName.current.value]: measurementGrams.current.value,
        },
      })
    );
  const deleteMeasurement = (mName: string) => {
    const measurements = { ...ingredient.additionalMeasurements };
    delete measurements[mName];
    dispatch(setIngredient({ additionalMeasurements: measurements }));
  };
  return (
    <Stack>
      <Stack flexDirection='row'>
        <TextField
          sx={{ width: '70%' }}
          label='measurement name'
          inputRef={measurementName}
        />
        <TextField
          sx={{ width: '20%' }}
          label='grams'
          type='number'
          inputRef={measurementGrams}
        />
        <Button
          sx={{ width: '10%', fontSize: 20 }}
          variant='outlined'
          onClick={addMeasurement}
        >
          +
        </Button>
      </Stack>
      <List sx={{ overflow: 'auto', boxShadow: 1, height: 200 }}>
        {Object.entries(ingredient.additionalMeasurements).map(
          ([mName, grams], index) => (
            <Box key={index}>
              <ListItem>
                <ListItemText>
                  {mName} {grams}g
                </ListItemText>
                <IconButton onClick={() => deleteMeasurement(mName)}>
                  <Delete />
                </IconButton>
              </ListItem>
              {index <
                Object.entries(ingredient.additionalMeasurements).length -
                  1 && <Divider />}
            </Box>
          )
        )}
      </List>
    </Stack>
  );
}
