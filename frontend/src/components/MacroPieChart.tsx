/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Paper, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import useNutrients from '../hooks/useNutrients';

interface MacroPieChartProps {
  nutrition: NutritionState;
  chartHeight?: number;
  chartWidth?: number;
  showPercentages?: boolean;
  center?: boolean;
  elevation?: number;
  minWidth?: number;
  maxWidth?: number;
  p?: number;
  border?: boolean;
}

export default function MacroPieChart({
  nutrition,
  chartWidth,
  chartHeight,
  showPercentages,
  center,
  elevation,
  minWidth,
  maxWidth,
  p,
  border,
}: MacroPieChartProps) {
  const nutrients = useNutrients();
  if (!Object.keys(nutrients).length || !Object.keys(nutrition).length)
    return <></>;

  const pieSizing = {
    width: chartWidth ?? 400,
    height: chartHeight ?? 300,
  };
  const protein = nutrition[nutrients.protein.nutrientId];
  const carbs = nutrition[nutrients.totalCarbs.nutrientId];
  const fat = nutrition[nutrients.totalFat.nutrientId];
  const calories = Math.round(protein * 4 + carbs * 4 + fat * 9);
  return (
    <Paper
      sx={{
        justifyContent: center ? 'center' : 'flex-start',
        display: 'flex',
        flexWrap: 'wrap',
        p: p ?? 0,
        alignItems: 'center',
        gap: 5,
      }}
      elevation={elevation ?? 0}
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        flexGrow={1}
        border={border ? 'solid dimgrey' : 'none'}
        minWidth={minWidth ?? 290}
        maxWidth={maxWidth ?? 380}
      >
        <Typography fontSize={24} fontWeight={600}>
          Caloric Distribution
        </Typography>
        <PieChart
          series={[
            {
              arcLabel: showPercentages
                ? (item) => `${Math.round((item.value / calories) * 100)}%`
                : undefined,
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
    </Paper>
  );
}