/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Theme, useMediaQuery } from '@mui/material';
import { PieChart } from '@mui/x-charts';
import useNutrients from '../hooks/useNutrients';
import { theme } from '../themes';

interface MacroPieChartProps {
  nutrition: NutritionState;
  chartDimension?: number;
  showPercentages?: boolean;
}

export default function MacroPieChart({ nutrition, chartDimension, showPercentages }: MacroPieChartProps) {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const nutrients = useNutrients();
  if (!Object.keys(nutrients).length || !Object.keys(nutrition).length) return <></>;
  const pieDimension = chartDimension ?? isSmallScreen ? 250 : 300;
  const pieSizing = {
    width: pieDimension,
    height: pieDimension,
  };
  const protein = nutrition[nutrients.protein.nutrientId];
  const carbs = nutrition[nutrients.totalCarbs.nutrientId];
  const fat = nutrition[nutrients.totalFat.nutrientId];
  const calories = Math.round(protein * 4 + carbs * 4 + fat * 9);
  return (
    <PieChart
      sx={{
        [theme.breakpoints.down('md')]: {
          marginBottom: '-104px',
        },
      }}
      series={[
        {
          arcLabel: showPercentages ? (item) => `${Math.round((item.value / calories) * 100)}%` : undefined,
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
      {...pieSizing}
    />
  );
}
