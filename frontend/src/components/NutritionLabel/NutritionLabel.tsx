import { Box } from '@mui/material';
import Macronutrients from './components/Macronutrients';
import Micronutrients from './components/Micronutrients';
import useNutrients from '../../hooks/useNutrients';
import {
  NutritionBox,
  NutritionCaloriesTypography,
  NutritionDivider,
  NutritionFooter,
  NutritionHeaderTypography,
  NutritionText,
} from './components/styledComponents';

interface NutritionLabelProps {
  nutrition: NutritionState;
}

export default function NutritionLabel({ nutrition }: NutritionLabelProps) {
  const nutrients = useNutrients();
  const calories =
    Object.keys(nutrients).length && Object.keys(nutrition).length
      ? Math.round(
          nutrition[nutrients.protein.nutrientId] * 4 +
            nutrition[nutrients.totalCarbs.nutrientId] * 4 +
            nutrition[nutrients.totalFat.nutrientId] * 9
        )
      : 0;
  return (
    Object.keys(nutrients).length > 0 && (
      <NutritionBox
        p={1}
        sx={{ outline: 'solid dimgrey' }}
      >
        <NutritionHeaderTypography>Nutrition Facts</NutritionHeaderTypography>
        <NutritionDivider />
        <NutritionText fontWeight='bold'>Amount Per Serving</NutritionText>
        <Box display='flex' justifyContent='space-between'>
          <NutritionCaloriesTypography>Calories</NutritionCaloriesTypography>
          <NutritionCaloriesTypography>{calories}</NutritionCaloriesTypography>
        </Box>
        <NutritionDivider sx={{ m: 0, mb: 1, borderBottomWidth: 5 }} />
        <NutritionText align='right'>
          <strong>% Daily Value*</strong>
        </NutritionText>
        <NutritionDivider sx={{ borderStyle: 'dotted', m: 0 }} />
        <Macronutrients nutrition={nutrition} nutrients={nutrients} />
        <NutritionDivider sx={{ borderBottomWidth: 10 }} />
        <Micronutrients nutrition={nutrition} nutrients={nutrients} />
        <NutritionDivider sx={{ borderBottomWidth: 5 }} />
        <NutritionFooter>
          The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000
          calories a day is used for general nutrition advice.
        </NutritionFooter>
      </NutritionBox>
    )
  );
}
