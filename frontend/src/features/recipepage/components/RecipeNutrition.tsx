import { Stack } from '@mui/material';
import MacroPieChart from '../../../components/MacroPieChart';
import NutritionLabel from '../../../components/nutritionlabel/NutritionLabel';
import { calculateNutrition } from '../helpers/calculateNutrition';
import { MacroPieChartTitle, RecipeNutritionPaper } from './styledComponents';

interface RecipeNutritionProps {
  ingredients: Array<IngredientState>;
}

export default function RecipeNutrition({ ingredients }: RecipeNutritionProps) {
  const nutrition = calculateNutrition(ingredients);
  return (
    <RecipeNutritionPaper>
      <NutritionLabel nutrition={nutrition} />
      <Stack alignItems='center'>
        <MacroPieChartTitle>Caloric Distribution</MacroPieChartTitle>
        <MacroPieChart nutrition={nutrition} />
      </Stack>
    </RecipeNutritionPaper>
  );
}
