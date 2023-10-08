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
  const recipeData = useSelector<IRootState, RecipeState>(
    (state) => state.recipe
  );

  useEffect(() => {
    dispatch(setRecipeId(routeParams.id)); // TODO: may move to recipe onmount if editrecipe is accessed through that page.
  }, []);

  const onSave = () => {
    dispatch(editRecipeRequest());
  };

  const onDelete = () => {
    dispatch(deleteRecipeRequest(recipeData.recipeId));
    navigate('/recipes');
  };

  const components = [
    <Information key={0} />, // TODO: constrain to numbers for nutrition
    <ToolsIngredients key={1} />,
    <Instructions instructions={recipeData.instructions} key={2} />,
  ];
  return (
    <Container sx={{ pt: 10 }}>
      <Box display='flex' flexDirection='column'>
        <Typography variant='h4' pb={2}>
          Recipe Name
        </Typography>
        <TextField
          value={recipeData.recipeName}
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
