import {
  Alert,
  Autocomplete,
  Box,
  Button,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ingredients } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { IRootState } from '../../..';
import {
  RecipeState,
  addIngredient,
  deleteIngredient,
} from '../../../redux/components/recipes/recipeReducer';

interface State {
  selectedIngredient: string | null;
  amount: string;
  alertStatus: string;
}
const initialState = {
  selectedIngredient: null,
  amount: '',
  alertStatus: '',
};

export default function IngredientsEditList() {
  const dispatch = useDispatch();
  const [state, setState] = useState<State>(initialState);
  const recipeData = useSelector<IRootState, RecipeState>(
    (state) => state.recipe
  );

  const handleAdd = () => {
    const curIngredients = recipeData.ingredients.map((ingr) => ingr.name);
    if (!state.selectedIngredient) {
      return;
    }
    if (curIngredients.includes(state.selectedIngredient)) {
      setState({
        ...state,
        alertStatus: 'Ingredient already exists',
      });
      return;
    }
    dispatch(
      addIngredient({
        name: state.selectedIngredient,
        amount: state.amount,
      })
    );
  };

  return (
    <>
      {state.alertStatus && (
        <Alert severity='warning' sx={{ marginBottom: 2, width: '720px' }}>
          {state.alertStatus}
        </Alert>
      )}
      <Box paddingBottom={3} display='flex'>
        <Autocomplete
          sx={{ width: '500px' }}
          options={ingredients}
          onChange={(e, value) =>
            setState({
              ...state,
              selectedIngredient: value,
              alertStatus: '',
            })
          }
          renderInput={(params) => (
            <TextField {...params} label={'Ingredients'} />
          )}
        />
        <TextField
          onChange={(e) => setState({ ...state, amount: e.target.value })}
          label='amount'
          sx={{ width: '150px' }}
        ></TextField>
        <Button
          sx={{
            marginLeft: '10px',
            width: '90px',
            height: '50px',
            alignSelf: 'center',
          }}
          onClick={handleAdd}
          variant='contained'
        >
          Add
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: 750 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <Typography fontWeight='bold'>Amount</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight='bold'>Ingredient</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipeData.ingredients.map((ingr, index) => (
              <TableRow
                hover
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ width: 0 }}>
                  <IconButton
                    onClick={() => {
                      dispatch(deleteIngredient(index));
                      setState({ ...state, alertStatus: '' });
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ width: 0 }}>
                  <Typography noWrap fontSize={18}>
                    {ingr.amount}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography noWrap fontSize={18}>
                    {ingr.name}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
