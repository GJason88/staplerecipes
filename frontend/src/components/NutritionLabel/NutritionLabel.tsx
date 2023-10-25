/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Paper, Box, Typography, Divider } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import Macronutrients from './Macronutrients';
import Micronutrients from './Micronutrients';
import useNutrition from '../../hooks/useNutrition/useNutrition';

const pieSizing = {
  margin: { right: 15, top: 15 },
  width: 400,
  height: 300,
  legend: { hidden: true },
};

export default function NutritionLabel() {
  const nutrition = useNutrition();
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
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='50%'
        flexGrow={1}
      >
        <Typography fontSize={24} fontWeight={600}>
          Caloric Distribution
        </Typography>
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.value}% ${item.label}`,
              data: [
                { id: 0, value: 20, label: 'Fat', color: 'darkorange' },
                { id: 1, value: 50, label: 'Carbs', color: '#a67b5b' },
                { id: 2, value: 30, label: 'Protein', color: 'darkred' },
              ],
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontSize: 14,
            },
          }}
          {...pieSizing}
        />
      </Box>
    </Paper>
  );
}
