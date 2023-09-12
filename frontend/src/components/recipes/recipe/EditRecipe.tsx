import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { recipeWidth, pLen } from '../../../constants';
import ToolsIngredients from './ToolsIngredients';
import TimeNutrition from './TimeNutrition';
import SaveRecipe from './SaveRecipe';
import Instructions from './Instructions';
import {
  RecipeState,
  getRecipesFetch,
  updateRecipeName,
} from '../../../redux/components/recipes/recipeReducer';
import { IRootState } from '../../..';
import { useDispatch, useSelector } from 'react-redux';

export default function EditRecipe() {
  const dispatch = useDispatch();
  const recipeData = useSelector<IRootState, RecipeState>(
    (state) => state.recipe
  );
  // const [sampleData, setSampleData] = useState({});
  // function fetchData() {
  //   axios
  //     .get('http://localhost:3000/recipes')
  //     .then((response) => {
  //       setSampleData(response.data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const onSave = () => {
    dispatch(getRecipesFetch());
  };

  const components = [
    <TimeNutrition key={0} />,
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
