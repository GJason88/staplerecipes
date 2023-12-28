import { AppBar, Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../themes';
import { appbarL, appbarM, appbarS, appbarXL } from '../data/constants';

export const StyledAppbar = styled(AppBar)(() => ({
  boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
  height: appbarXL,
  display: 'flex',
  alignItems: 'space-between',
  justifyContent: 'center',
  borderRadius: '32px',
  [theme.breakpoints.down('xl')]: {
    height: appbarL,
  },
  [theme.breakpoints.down('lg')]: {
    height: appbarM,
  },
  [theme.breakpoints.down('md')]: {
    height: appbarS,
  },
}));

export const AppbarButtons = styled(Stack)(() => ({
  gap: '100px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  [theme.breakpoints.down('xl')]: {
    gap: '80px',
  },
  [theme.breakpoints.down('lg')]: {
    gap: '40px',
  },
  [theme.breakpoints.down(700)]: {
    gap: '20px',
  },
}));

export const AppbarButton = styled(Button)(() => ({
  borderRadius: '32px',
  padding: '12px 24px',
  fontSize: '20px',
  fontWeight: 'bold',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
    padding: '6px 12px',
  },
  [theme.breakpoints.down(700)]: {
    fontSize: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const AppbarProfile = styled(Button)(() => ({
  fontSize: '12px',
  fontWeight: 500,
}));

export const Content = styled(Box)(() => ({
  display: 'flex',
  marginTop: appbarXL,
  marginBottom: '24px',
  padding: '32px',
  backgroundColor: '#FFD495',
  justifyContent: 'center',
  boxShadow: '-1px -1px 4px 0px rgba(0, 0, 0, 0.25), 1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '32px',
  maxWidth: '960px',
  flexShrink: 1,
  [theme.breakpoints.down('xl')]: {
    marginTop: appbarL,
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: appbarM,
  },
  [theme.breakpoints.down('md')]: {
    marginTop: appbarS,
  },
}));
