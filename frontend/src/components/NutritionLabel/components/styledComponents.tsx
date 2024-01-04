import { Box, Divider, Typography, styled } from '@mui/material';
import { theme } from '../../../themes';

export const NutritionBox = styled(Box)(() => ({
  padding: '8px',
  outline: 'solid dimgrey',
  width: '45%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '350px',
    width: '100%'
  },
}));

export const NutritionDivider = styled(Divider)(() => ({
  borderColor: 'dimgrey',
  margin: '8px 0px',
}));

export const NutritionHeaderTypography = styled(Typography)(() => ({
  fontSize: '38px',
  fontWeight: 'bold',
  margin: '-8px 0px',
  [theme.breakpoints.down('md')]: {
    fontSize: '34px',
  },
}));

export const NutritionCaloriesTypography = styled(Typography)(() => ({
  fontSize: '26px',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
  },
}));

export const NutritionText = styled(Typography)(() => ({
  fontSize: '16px',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
}));

export const NutritionFooter = styled(Typography)(() => ({
  fontSize: '10px',
  [theme.breakpoints.down('md')]: {
    fontSize: '6px',
  },
}));
