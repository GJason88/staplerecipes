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
import TimeNutrition from './TimeNutrition';
import Instructions from './Instructions';
import {
  RecipeState,
  updateRecipeName,
} from '../../../redux/components/recipes/recipeReducer';
import { IRootState } from '../../..';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function EditRecipe() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const recipeData = useSelector<IRootState, RecipeState>(
    (state) => state.recipe
  );

  useEffect(() => {
    console.log(routeParams);
  }, []);

  const onSave = () => {
    // update recipe
  };

  const components = [
    <TimeNutrition key={0} />, // constrain to numbers for nutrition
    <ToolsIngredients ingredients={recipeData.ingredients} key={1} />,
    <Instructions instructions={recipeData.instructions} key={2} />,
  ];
  return (
    <Container sx={{ pt: 10 }}>
      <Box display='flex' flexDirection='column'>
        <Typography variant='h4' pb={2}>
          Recipe Name
        </Typography>
        <TextField
          value={recipeData.name}
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
      </Box>
    </Container>
  );
}
