import { Button, ListItemText, Paper, Stack, Typography, styled } from '@mui/material';
import { theme } from '../../../themes';

export const RecipeStack = styled(Stack)(() => ({
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const RecipePaper = styled(Paper)(() => ({
  padding: '16px 24px',
  minWidth: '290px',
  flexGrow: 1,
  textAlign: 'start',
  width: '100%',
}));

export const RecipeNutritionPaper = styled(Paper)(() => ({
  padding: '24px 0px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  textAlign: 'start',
  width: '100%',
  minWidth: '290px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '48px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
    gap: '32px',
  },
}));

export const RecipeButton = styled(Button)(() => ({
  backgroundColor: 'rgba(247,198,142,0.9)',
  ':hover': {
    backgroundColor: 'rgba(247,198,142,0.9)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
  },
}));

export const HeadingTypography = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const BodyTypography = styled(Typography)(() => ({
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const BodyListItemText = styled(ListItemText)(() => ({
  '.MuiListItemText-primary': {
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  '.MuiListItemText-secondary': {
    fontSize: '14px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
}));

export const MacroPieChartTitle = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '-32px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '-88px',
  },
}));
