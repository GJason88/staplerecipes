import { Button, FormControl, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../..';
import { createNewIngredientRequest } from '../adminIngredientsReducer';
import IngredientForm from '../components/IngredientForm';

export default function IngredientAddTool() {
  const dispatch = useDispatch();
  const ingredient = useSelector<IRootState, IngredientState>(
    (state) => state.adminIngredients.ingredient
  );
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
            flexDirection: 'column',
            width: '100%',
            flexWrap: 'wrap',
            gap: 6,
          }}
        >
          <IngredientForm ingredient={ingredient} />
          <Button
            sx={{ width: '70%', alignSelf: 'center' }}
            variant='contained'
            type='submit'
          >
            Create Ingredient
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
}
