/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';

interface MacroPieChartProps {
  protein: number;
  fat: number;
  carbs: number;
  calories: number;
}

const pieSizing = {
  margin: { top: 15 },
  width: 400,
  height: 300,
};

export default function MacroPieChart({
  protein,
  fat,
  carbs,
  calories,
}: MacroPieChartProps) {
  return (
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
            arcLabel: (item) => `${Math.round((item.value / calories) * 100)}%`,
            data: [
              {
                id: 0,
                value: Math.round(fat * 9),
                label: 'Fat',
                color: 'darkorange',
              },
              {
                id: 1,
                value: Math.round(carbs * 4),
                label: 'Carbs',
                color: '#a67b5b',
              },
              {
                id: 2,
                value: Math.round(protein * 4),
                label: 'Protein',
                color: 'darkred',
              },
            ],
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontSize: 12,
          },
        }}
        {...pieSizing}
      />
    </Box>
  );
}
