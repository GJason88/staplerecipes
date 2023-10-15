import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { recipeWidth } from '../../../data/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  addIngredient,
  deleteIngredient,
  updateTools,
} from '../../../redux/components/recipes/recipeReducer';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IRootState } from '../../..';
import {
  ToolState,
  getToolsRequest,
} from '../../../redux/components/tools/toolsReducer';
import {
  IngredientState,
  getIngredientsRequest,
} from '../../../redux/components/ingredients/ingredientsReducer';

interface ToolsIngredientsProps {
  recipeIngredients: Array<IngredientState>;
  recipeTools: Array<ToolState>;
}

interface State {
  selectedIngredient: IngredientState | null;
  amount: string;
  alertStatus: string;
}

const initialState = {
  selectedIngredient: null,
  amount: '',
  alertStatus: '',
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function ToolsIngredients(props: ToolsIngredientsProps) {
  const dispatch = useDispatch();
  const [state, setState] = useState<State>(initialState);
  const allTools = useSelector<IRootState, Array<ToolState>>(
    (state) => state.tools.tools
  );
  const allIngredients = useSelector<IRootState, Array<IngredientState>>(
    (state) => state.ingredients.ingredients
  );

  useEffect(() => {
    dispatch(getToolsRequest());
    dispatch(getIngredientsRequest());
  }, [dispatch]);

  const handleAdd = () => {
    if (!state.selectedIngredient) {
      return;
    }
    if (
      props.recipeIngredients.some(
        (ingr) => ingr.ingredientId === state.selectedIngredient?.ingredientId
      )
    ) {
      setState({
        ...state,
        alertStatus: 'Ingredient already exists',
      });
      return;
    }
    dispatch(
      addIngredient({
        ...state.selectedIngredient,
        amount: state.amount,
      })
    );
  };

  return (
    <>
      <Typography variant='h4' pb={2}>
        Tools & Ingredients
      </Typography>
      <Autocomplete
        sx={{
          maxWidth: recipeWidth,
          pb: 2,
        }}
        onChange={(e, value) => dispatch(updateTools(value))}
        fullWidth
        multiple
        options={allTools}
        value={allTools.filter((tool) =>
          props.recipeTools.some(
            (recipeTool) => recipeTool.toolId === tool.toolId
          )
        )}
        disableCloseOnSelect
        getOptionLabel={(option) => option.toolName}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.toolName}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label={'Tools'} />}
      />
      <Box pb={2} display='flex'>
        <Autocomplete
          sx={{ width: 650 }}
          options={allIngredients}
          getOptionLabel={(option) => option.ingredientName}
          onChange={(e, value) =>
            setState({
              ...state,
              selectedIngredient: value,
              alertStatus: '',
            })
          }
          renderInput={(params) => (
            <TextField {...params} label={'Ingredient'} />
          )}
        />
        <TextField
          onChange={(e) => setState({ ...state, amount: e.target.value })}
          label='Amount'
          type='number'
          sx={{ width: 150 }}
        ></TextField>
        <Button
          sx={{
            marginLeft: '10px',
            width: 90,
            alignSelf: 'center',
          }}
          onClick={handleAdd}
          variant='outlined'
        >
          <AddIcon />
        </Button>
      </Box>
      {state.alertStatus && (
        <Alert
          severity='warning'
          sx={{ marginBottom: 1, width: recipeWidth - 30 }}
        >
          {state.alertStatus}
        </Alert>
      )}
      <TableContainer component={Paper} sx={{ maxWidth: recipeWidth }}>
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
            {props.recipeIngredients.map((ingr, index) => {
              if (!ingr) return;
              return (
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
                      {ingr.ingredientName}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
