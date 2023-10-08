import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { recipeWidth, pLen } from '../../../constants';
import ToolsIngredients from './ToolsIngredients';
import Information from './Information';
import Instructions from './Instructions';
import {
  RecipeState,
  deleteRecipeRequest,
  editRecipeRequest,
  setInvalid,
  setRecipeId,
  updateRecipeName,
} from '../../../redux/components/recipes/recipeReducer';
import { IRootState } from '../../..';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditRecipe() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    recipeId,
    recipeName,
    ingredients,
    tools,
    instructions,
    time,
    invalid,
  } = useSelector<IRootState, RecipeState>((state) => state.recipe);

  useEffect(() => {
    dispatch(setRecipeId(routeParams.id)); // TODO: Move to recipe onmount since editrecipe is accessed through that page.
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (invalid) {
      navigate('/recipes');
      dispatch(setInvalid(false));
    }
  }, [invalid, dispatch, navigate]);

  const onSave = () => {
    dispatch(editRecipeRequest());
  };

  const onDelete = () => {
    dispatch(deleteRecipeRequest(recipeId));
    navigate('/recipes');
  };

  const components = [
    <Information time={time} key={0} />, // TODO: constrain to numbers for nutrition
    <ToolsIngredients
      recipeIngredients={ingredients}
      recipeTools={tools}
      key={1}
    />,
    <Instructions instructions={instructions} key={2} />,
  ];
  return (
    <Container sx={{ pt: 10 }}>
      <Box display='flex' flexDirection='column'>
        <Typography variant='h4' pb={2}>
          Recipe Name
        </Typography>
        <TextField
          value={recipeName}
          onChange={(e) => dispatch(updateRecipeName(e.target.value))}
          sx={{ pb: 4, width: recipeWidth }}
        />
        {components.map((component, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{ width: recipeWidth - pLen * 2, mb: 4, p: 2 }}
          >
            {component}
          </Paper>
        ))}
        <Button
          onClick={onSave}
          variant='contained'
          sx={{ width: recipeWidth, mb: 3 }}
        >
          Save
        </Button>
        <Button
          onClick={onDelete}
          variant='outlined'
          color='error'
          sx={{ width: recipeWidth, mb: 3 }}
        >
          Delete Recipe {/* TODO: move to recipe UI page */}
        </Button>
      </Box>
    </Container>
  );
}
