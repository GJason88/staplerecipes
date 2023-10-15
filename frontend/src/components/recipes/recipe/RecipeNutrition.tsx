import { Paper, Box, Typography, Divider } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';

const pieSizing = {
  margin: { right: 15, top: 15 },
  width: 400,
  height: 300,
  legend: { hidden: true },
};

export default function RecipeNutrition() {
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
            230
          </Typography>
        </Box>
        <Divider sx={{ mb: 1, borderColor: 'dimgrey', borderBottomWidth: 5 }} />
        <Typography align='right' fontSize={16}>
          <strong>% Daily Value*</strong>
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Box display='flex' justifyContent='space-between'>
          <Typography pr={1} fontSize={16}>
            <strong>Total Fat</strong> 7g
          </Typography>
          <Typography pr={1} fontSize={16} fontWeight={600}>
            10%
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Typography pl={2} fontSize={16}>
          Saturated Fat 6g
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Typography fontSize={16}>
          <strong>Cholesterol</strong> 0mg
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Typography fontSize={16}>
          <strong>Sodium</strong> 50mg
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Typography fontSize={16}>
          <strong>Total Carbohydrate</strong> 42g
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Typography pl={2} fontSize={16}>
          Dietary Fiber 2g
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Typography pl={2} fontSize={16}>
          Total Sugars 6g
        </Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Typography fontSize={16}>
          <strong>Protein</strong> 12g
        </Typography>
        <Divider
          sx={{
            mt: 1,
            mb: 1,
            borderColor: 'dimgrey',
            borderBottomWidth: 10,
          }}
        />
        <Typography fontSize={16}>Vitamin C 12mg</Typography>
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
        <Typography fontSize={16}>Vitamin D 12mcg</Typography>
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
