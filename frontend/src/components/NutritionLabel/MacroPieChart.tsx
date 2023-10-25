/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';

interface MacroPieChartProps {
  protein: number;
  fat: number;
  carbs: number;
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
            arcLabel: (item) => `${item.value}%`,
            data: [
              { id: 0, value: fat * 8, label: 'Fat', color: 'darkorange' },
              { id: 1, value: carbs * 4, label: 'Carbs', color: '#a67b5b' },
              { id: 2, value: protein * 4, label: 'Protein', color: 'darkred' },
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
