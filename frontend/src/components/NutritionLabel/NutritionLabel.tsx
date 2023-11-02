import { Paper, Box, Typography, Divider } from '@mui/material';
import Macronutrients from './components/Macronutrients';
import Micronutrients from './components/Micronutrients';
import MacroPieChart from './components/MacroPieChart';
import { useQuery } from 'react-query';
import camelcaseKeys from 'camelcase-keys';
import { fetchNutrients } from '../../services/api/server/queries';

interface NutritionLabelProps {
  nutrition: NutritionState;
}

export default function NutritionLabel({ nutrition }: NutritionLabelProps) {
  const { data } = useQuery('nutrientsByLookup', () => fetchNutrients(), {
    refetchOnWindowFocus: false,
  });
  const nutrients: { [key: string]: NutrientState } = camelcaseKeys(
    data ?? {},
    { deep: true }
  );
  const calories =
    Object.keys(nutrients).length && Object.keys(nutrition).length
      ? Math.round(
          nutrition[nutrients.protein.nutrientId] * 4 +
            nutrition[nutrients.totalCarbs.nutrientId] * 4 +
            nutrition[nutrients.totalFat.nutrientId] * 8
        )
      : 0;
  return (
    Object.keys(nutrients).length > 0 && (
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
          maxWidth={380}
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
              {calories}
            </Typography>
          </Box>
          <Divider
            sx={{ mb: 1, borderColor: 'dimgrey', borderBottomWidth: 5 }}
          />
          <Typography align='right' fontSize={16}>
            <strong>% Daily Value*</strong>
          </Typography>
          <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
          <Macronutrients nutrition={nutrition} nutrients={nutrients} />
          <Divider
            sx={{
              mt: 1,
              mb: 1,
              borderColor: 'dimgrey',
              borderBottomWidth: 10,
            }}
          />
          <Micronutrients nutrition={nutrition} nutrients={nutrients} />
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
        {calories > 0 && (
          <MacroPieChart
            protein={nutrition[nutrients.protein.nutrientId]}
            fat={nutrition[nutrients.totalFat.nutrientId]}
            carbs={nutrition[nutrients.totalCarbs.nutrientId]}
            calories={calories}
          />
        )}
      </Paper>
    )
  );
}
