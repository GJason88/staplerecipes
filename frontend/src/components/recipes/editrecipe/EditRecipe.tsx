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
  deleteRecipeRequest,
  editRecipeRequest,
  setInvalid,
  setRecipeId,
  updateRecipeName,
} from '../../../redux/components/recipes/recipeReducer';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useRecipe from '../../../hooks/useRecipe';
import '../../components.scss';

export default function EditRecipe() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipe = useRecipe();
  // const recipeRef = useRef(recipe); // change properties of this in child components
  // TODO: Add useRef after implementing recipepage, since recipe data will be fetched there, so when this page is loaded state will already have recipe data,
  //       which can then be used as initial values for refs which would be defaultValue for uncontrolled components.
  useEffect(() => {
    dispatch(setRecipeId(routeParams.id)); // TODO: Move to recipe onmount since editrecipe is accessed through that page.
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (recipe.invalid) {
      navigate('/recipes');
      dispatch(setInvalid(false));
    }
  }, [dispatch, navigate, recipe.invalid]);

  const onSave = () => {
    dispatch(editRecipeRequest());
  };

  const onDelete = () => {
    dispatch(deleteRecipeRequest(recipe.recipeId));
    navigate('/recipes');
  };

  const components = [
    <Information time={recipe.time} key={0} />, // TODO: constrain to numbers for nutrition
    <ToolsIngredients
      recipeIngredients={recipe.ingredients}
      recipeTools={recipe.tools}
      key={1}
    />,
    <Instructions instructions={recipe.instructions} key={2} />,
  ];
  return (
    <Container sx={{ pt: 10 }}>
      <Box display='flex' flexDirection='column'>
        <Typography variant='h4' pb={2}>
          Recipe Name
        </Typography>
        <TextField
          value={recipe.recipeName}
          onChange={(e) => dispatch(updateRecipeName(e.target.value))}
          sx={{ mb: 4, width: recipeWidth, backgroundColor: '#f8f8f8' }}
        />
        {components.map((component, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{ width: recipeWidth, mb: 4, p: 2 }}
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
