/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import useNutrients from '../hooks/useNutrients';

interface MacroPieChartProps {
  nutrition: NutritionState;
  height?: number;
  width?: number;
}

export default function MacroPieChart({
  nutrition,
  width,
  height,
}: MacroPieChartProps) {
  const nutrients = useNutrients();
  if (!Object.keys(nutrients).length || !Object.keys(nutrition).length)
    return <></>;

  const pieSizing = {
    width: width ?? 400,
    height: height ?? 300,
  };
  const protein = nutrition[nutrients.protein.nutrientId];
  const carbs = nutrition[nutrients.totalCarbs.nutrientId];
  const fat = nutrition[nutrients.totalFat.nutrientId];
  const calories = Math.round(protein * 4 + carbs * 4 + fat * 9);
  return (
    <Box display='flex' flexDirection='column' alignItems='center' flexGrow={1}>
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
