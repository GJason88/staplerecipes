import { Paper } from '@mui/material';
import MacroPieChart from '../../../components/MacroPieChart';
import NutritionLabel from '../../../components/nutritionlabel/NutritionLabel';
import { calculateNutrition } from '../helpers/calculateNutrition';

interface RecipeNutritionProps {
  ingredients: Array<IngredientState>;
}

export default function RecipeNutrition({ ingredients }: RecipeNutritionProps) {
  const nutrition = calculateNutrition(ingredients);
  return (
    <Paper
      sx={{
        p: 3,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <NutritionLabel nutrition={nutrition} />
      <MacroPieChart p={10} pr={8.3} nutrition={nutrition} />
    </Paper>
  );
}
