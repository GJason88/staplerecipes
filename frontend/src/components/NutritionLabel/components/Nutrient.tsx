import { Box, Divider } from '@mui/material';
import { NutritionText } from './styledComponents';

interface NutrientProps {
  nutrient: NutrientState;
  amount: number;
  bold?: boolean;
  pl?: number;
  noDivider?: boolean;
}

export default function Nutrient(props: NutrientProps) {
  return (
    <>
      <Box pl={props.pl ?? 0} display='flex' justifyContent='space-between'>
        <NutritionText>
          {props.bold ? <strong>{props.nutrient.nutrientName}</strong> : props.nutrient.nutrientName}{' '}
          {props.amount ?? 0}
          {props.nutrient.unit}
        </NutritionText>
        {props.nutrient.dv && (
          <NutritionText fontWeight='bold'>
            {Math.round(((props.amount ?? 0) / props.nutrient.dv) * 100)}%
          </NutritionText>
        )}
      </Box>
      {!props.noDivider && <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />}
    </>
  );
}
