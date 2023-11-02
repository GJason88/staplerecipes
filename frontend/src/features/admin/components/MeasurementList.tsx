import {
  Stack,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMeasurement, removeMeasurement } from '../adminReducer';
import { IRootState } from '../../..';
import { Delete } from '@mui/icons-material';

export default function MeasurementList() {
  const dispatch = useDispatch();
  const measurementName = useRef({ value: '' });
  const measurementGrams = useRef({ value: 0 });
  const measurements = useSelector<IRootState, { [key: string]: number }>(
    (state) => state.admin.newIngredient.additionalMeasurements
  );
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
          onClick={() =>
            measurementName.current.value &&
            measurementGrams.current.value &&
            dispatch(
              addMeasurement({
                [measurementName.current.value]: measurementGrams.current.value,
              })
            )
          }
        >
          +
        </Button>
      </Stack>
      <List sx={{ overflow: 'auto', boxShadow: 1, height: 200 }}>
        {Object.entries(measurements).map(([mName, grams], index) => (
          <>
            <ListItem key={index}>
              <ListItemText>
                {mName} {grams}g
              </ListItemText>
              <IconButton onClick={() => dispatch(removeMeasurement(mName))}>
                <Delete />
              </IconButton>
            </ListItem>
            {index < Object.entries(measurements).length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Stack>
  );
}
