import { Box, Divider, Typography } from '@mui/material';

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
        <Typography fontSize={16}>
          {props.bold ? (
            <strong>{props.nutrient.nutrientName}</strong>
          ) : (
            props.nutrient.nutrientName
          )}{' '}
          {props.amount ?? 0}
          {props.nutrient.unit}
        </Typography>
        {props.nutrient.dv && (
          <Typography fontSize={16} fontWeight={700}>
            {Math.round(((props.amount ?? 0) / props.nutrient.dv) * 100)}%
          </Typography>
        )}
      </Box>
      {!props.noDivider && (
        <Divider sx={{ borderStyle: 'dotted', borderColor: 'dimgrey' }} />
      )}
    </>
  );
}
