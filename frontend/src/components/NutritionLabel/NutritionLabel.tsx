import { Paper, Box, Typography, Divider } from '@mui/material';
import Macronutrients from './Macronutrients';
import Micronutrients from './Micronutrients';
import MacroPieChart from './MacroPieChart';

export default function NutritionLabel({ nutrition }: NutritionProps) {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        p: 3,
        alignItems: 'center',
        gap: 5,
      }}
    >
      <Box
        width='40%'
        flexGrow={1}
        minWidth={290}
        p={1}
        mb={1}
        sx={{ outline: 'solid dimgrey' }}
      >
        <Typography mt={-1} mb={-1} fontSize={38} fontWeight={1000}>
          Nutrition Facts
        </Typography>
        <Divider sx={{ mt: 1, mb: 1, borderColor: 'dimgrey' }} />
        <Typography fontSize={14} fontWeight={600}>
          Amount Per Serving
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography fontSize={26} fontWeight={1000}>
            Calories
          </Typography>
          <Typography fontSize={26} fontWeight={1000}>
            {nutrition.calories.amount}
          </Typography>
        </Box>
        <Divider sx={{ mb: 1, borderColor: 'dimgrey', borderBottomWidth: 5 }} />
        <Typography align='right' fontSize={16}>
          <strong>% Daily Value*</strong>
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Macronutrients nutrition={nutrition} />
        <Divider
          sx={{
            mt: 1,
            mb: 1,
            borderColor: 'dimgrey',
            borderBottomWidth: 10,
          }}
        />
        <Micronutrients nutrition={nutrition} />
        <Divider
          sx={{
            mt: 1,
            mb: 1,
            borderColor: 'dimgrey',
            borderBottomWidth: 5,
          }}
        />
        <Typography fontSize={10}>
          The % Daily Value (DV) tells you how much a nutrient in a serving of
          food contributes to a daily diet. 2,000 calories a day is used for
          general nutrition advice.
        </Typography>
      </Box>
      <MacroPieChart
        protein={nutrition.protein.amount}
        fat={nutrition.totalFat.amount}
        carbs={nutrition.carbs.amount}
      />
    </Paper>
  );
}
