import { Box, Divider } from '@mui/material';
import { NutritionText } from './styledComponents';

interface NutrientProps {
  nutrient: NutrientState;
  amount: number;
  bold?: boolean;
  pl?: number;
  noDivider?: boolean;
  fs?: string;
}

export default function Nutrient(props: NutrientProps) {
  return (
    <>
      <Box pl={props.pl ?? 0} display='flex' justifyContent='space-between'>
        <NutritionText sx={{fontSize: props.fs ?? 'inherit'}}>
          {props.bold ? <strong>{props.nutrient.nutrientName}</strong> : props.nutrient.nutrientName}{' '}
          {props.amount ?? 0}
          {props.nutrient.unit}
        </NutritionText>
        {props.nutrient.dv && (
          <NutritionText sx={{fontSize: props.fs ?? 'inherit'}} fontWeight='bold'>
            {Math.round(((props.amount ?? 0) / props.nutrient.dv) * 100)}%
          </NutritionText>
        )}
      </Box>
      {!props.noDivider && <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />}
    </>
  );
}
