import { Dialog, Stack, styled } from '@mui/material';
import { theme } from '../../../../../themes';

export const FDCSearchDialog = styled(Dialog)(() => ({
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
