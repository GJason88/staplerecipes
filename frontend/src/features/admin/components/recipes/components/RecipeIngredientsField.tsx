import {
  Paper,
  Box,
  Autocomplete,
  TextField,
  Button,
  Alert,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { recipeWidth } from '../../../../../data/constants';
import { Delete } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { setIngredients } from '../../../../recipepage/recipeReducer';
import useIngredients from '../../../../../hooks/useIngredients';
import { measurements } from '../../../../../data/measurements';

interface EditRecipeIngredientsProps {
  recipeIngredients: Array<IngredientState>;
}

export default function EditRecipeIngredients({
  recipeIngredients,
}: EditRecipeIngredientsProps) {
  const [selectedIngredient, setSelectedIngredient] =
    useState<IngredientState | null>(null);
  // eslint-disable-next-line prettier/prettier
  const [selectedMeasurement, setSelectedMeasurement] = useState<string | null>(
    null
  );
  const [alert, setAlert] = useState<string>('');
  const dispatch = useDispatch();
  const allIngredients = useIngredients();
  const availableMeasurements = [
    ...measurements.weight,
    ...(selectedIngredient?.mlFor100G ? measurements.volume : []),
    ...Object.keys(selectedIngredient?.additionalMeasurements ?? {}),
  ];

  const amountRef = useRef({ value: 0 });
  const addIngredient = () => {
    if (
      !selectedIngredient ||
      !amountRef.current.value ||
      !selectedMeasurement
    ) {
      return;
    }
    if (
      recipeIngredients.some(
        (ingr) => ingr.ingredientId === selectedIngredient?.ingredientId
      )
    ) {
      setAlert('Ingredient Already Exists');
      return;
    }
    dispatch(
      setIngredients([
        ...recipeIngredients,
        {
          ...selectedIngredient,
          amount: amountRef.current.value,
          defaultMeasurement: selectedMeasurement,
        },
      ])
    );
  };

  useEffect(() => setAlert(''), [recipeIngredients]);
  return (
    <Paper elevation={2} sx={{ width: recipeWidth, p: 2 }}>
      <Typography variant='h4' pb={2}>
        Ingredients
      </Typography>
      <Box pb={2} display='flex'>
        <Autocomplete
          sx={{ width: '60%' }}
          options={allIngredients}
          getOptionLabel={(option) => option.ingredientName}
          isOptionEqualToValue={(option, value) =>
            option.ingredientId === value.ingredientId
          }
          onChange={(e, value) => {
            setSelectedIngredient(value);
            setSelectedMeasurement(null);
          }}
          renderInput={(params) => (
            <TextField {...params} label={'Ingredient'} />
          )}
        />
        <TextField
          label='Amount'
          inputRef={amountRef}
          type='number'
          sx={{ width: '20%' }}
        ></TextField>
        <Autocomplete
          sx={{ width: '20%' }}
          options={availableMeasurements}
          getOptionLabel={(option) => option}
          value={selectedMeasurement}
          onChange={(e, value) => setSelectedMeasurement(value)}
          renderInput={(params) => (
            <TextField {...params} label={'Measurement'} />
          )}
        />
        <Button
          sx={{
            marginLeft: '10px',
            width: 90,
            alignSelf: 'center',
          }}
          variant='outlined'
          onClick={addIngredient}
        >
          <AddIcon />
        </Button>
      </Box>
      {alert && (
        <Alert
          severity='warning'
          sx={{ marginBottom: 1, width: recipeWidth - 30 }}
        >
          {alert}
        </Alert>
      )}
      <List
        dense
        sx={{ overflow: 'auto', boxShadow: 1, minHeight: 50, maxHeight: 400 }}
      >
        {recipeIngredients.map((ingr, index) => (
          <Box key={index}>
            <ListItem>
              <ListItemText
                primary={ingr.ingredientName}
                secondary={`${ingr.amount} ${ingr.defaultMeasurement}`}
              />
              <IconButton
                onClick={() =>
                  dispatch(
                    setIngredients([
                      ...recipeIngredients.slice(0, index),
                      ...recipeIngredients.slice(index + 1),
                    ])
                  )
                }
              >
                <Delete />
              </IconButton>
            </ListItem>
            {index < Object.entries(recipeIngredients).length - 1 && (
              <Divider />
            )}
          </Box>
        ))}
      </List>
    </Paper>
  );
}
