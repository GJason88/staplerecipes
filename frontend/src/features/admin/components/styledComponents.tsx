import { Dialog, Paper, Stack, styled } from '@mui/material';
import { theme } from '../../../themes';

export const SearchDialog = styled(Dialog)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  overflow: 'auto',
  padding: '16px',
  maxHeight: `calc(100vh)`,
}));

export const CreateIngredientStack = styled(Stack)(() => ({
  gap: '16px',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const RecipeFormPaper = styled(Paper)(() => ({
  padding: '16px',
  width: '100%',
}));

export const CreateRecipeIngredients = styled(Stack)(() => ({
  flexDirection: 'row',
  paddingBottom: '16px',
  gap: '8px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));
