import { Box, Typography, Divider } from '@mui/material';
import Macronutrients from './components/Macronutrients';
import Micronutrients from './components/Micronutrients';
import useNutrients from '../../hooks/useNutrients';

interface NutritionLabelProps {
  nutrition: NutritionState;
  center?: boolean;
  minWidth?: number;
  maxWidth?: number;
  maxHeight?: number;
  fs?: number;
  p?: number;
}

export default function NutritionLabel({
  nutrition,
  ...props
}: NutritionLabelProps) {
  const fs = props.fs ?? 16;
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
      <Box
        flexGrow={1}
        minWidth={props.minWidth ?? 290}
        maxWidth={props.maxWidth ?? 380}
        maxHeight={props.maxHeight ?? 600}
        p={1}
        mb={1}
        sx={{ outline: 'solid dimgrey' }}
      >
        <Typography mt={-1} mb={-1} fontSize={fs * 2.4} fontWeight={1000}>
          Nutrition Facts
        </Typography>
        <Divider sx={{ mt: 1, mb: 1, borderColor: 'dimgrey' }} />
        <Typography fontSize={fs - 2} fontWeight={600}>
          Amount Per Serving
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography fontSize={fs * 1.6} fontWeight={1000}>
            Calories
          </Typography>
          <Typography fontSize={fs * 1.6} fontWeight={1000}>
            {calories}
          </Typography>
        </Box>
        <Divider sx={{ mb: 1, borderColor: 'dimgrey', borderBottomWidth: 5 }} />
        <Typography align='right' fontSize={fs}>
          <strong>% Daily Value*</strong>
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Macronutrients fs={fs} nutrition={nutrition} nutrients={nutrients} />
        <Divider
          sx={{
            mt: 1,
            mb: 1,
            borderColor: 'dimgrey',
            borderBottomWidth: 10,
          }}
        />
        <Micronutrients fs={fs} nutrition={nutrition} nutrients={nutrients} />
        <Divider
          sx={{
            mt: 1,
            mb: 1,
            borderColor: 'dimgrey',
            borderBottomWidth: 5,
          }}
        />
        <Typography fontSize={fs - 6}>
          The % Daily Value (DV) tells you how much a nutrient in a serving of
          food contributes to a daily diet. 2,000 calories a day is used for
          general nutrition advice.
        </Typography>
      </Box>
    )
  );
}
