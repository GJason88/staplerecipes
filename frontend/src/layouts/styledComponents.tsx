import { Alert, AppBar, Box, Button, Stack, ToggleButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../themes';
import { appbarL, appbarM, appbarS, appbarXL } from '../data/constants';

export const StyledAppbar = styled(AppBar)(() => ({
  boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
  height: appbarM,
  display: 'flex',
  alignItems: 'space-between',
  justifyContent: 'center',
  borderRadius: '32px',
  opacity: '95%',
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

export const MobileAppbarButtons = styled(Stack)(() => ({
  boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
  position: 'absolute',
  borderRadius: '32px',
  marginTop: '290px',
  marginLeft: '-16px',
  backgroundColor: 'rgba(247,198,142,0.9)',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const MobileAppbarButton = styled(ToggleButton)(() => ({
  borderRadius: '8px',
  padding: '12px 24px',
  fontSize: '12px',
  fontWeight: 'bold',
  border: 'none',
  color: '#AB5353',
  width: '100%',
  ':hover': {
    backgroundColor: 'rgba(249, 178, 98, 0.5)',
  },
  '&.Mui-selected': {
    backgroundColor: 'rgba(249, 178, 98, 1)',
    color: '#AB5353',
    ':hover': {
      backgroundColor: 'rgba(249, 178, 98, 1)',
    },
  },
}));

export const AppbarButton = styled(ToggleButton)(() => ({
  borderRadius: '32px',
  padding: '12px 24px',
  fontSize: '20px',
  fontWeight: 'bold',
  border: 'none',
  color: '#AB5353',
  ':hover': {
    backgroundColor: 'rgba(249, 178, 98, 0.5)',
  },
  '&.Mui-selected': {
    backgroundColor: 'rgba(249, 178, 98, 1)',
    color: '#AB5353',
    ':hover': {
      backgroundColor: 'rgba(249, 178, 98, 1)',
    },
  },
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
  marginTop: appbarM,
  marginBottom: '24px',
  padding: '32px',
  backgroundColor: '#FFD495',
  boxShadow: '-1px -1px 4px 0px rgba(0, 0, 0, 0.25), 1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '32px',
  maxWidth: '960px',
  minWidth: '281px',
  width: '100%',
  flexShrink: 1,
  overflow: 'auto',
  minHeight: `calc(100vh - 48px - ${appbarM})`,
  [theme.breakpoints.down('md')]: {
    marginTop: appbarS,
    minHeight: `calc(100vh - 48px - ${appbarS})`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px 8px',
  },
}));

export const EmailVerificationAlert = styled(Alert)(() => ({
  borderRadius: 20,
  marginTop: appbarXL,
  marginBottom: `-${appbarXL}`,
  [theme.breakpoints.down('xl')]: {
    marginTop: appbarL,
    marginBottom: `-${appbarL}`,
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: appbarM,
    marginBottom: `-${appbarM}`,
  },
  [theme.breakpoints.down('md')]: {
    marginTop: appbarS,
    marginBottom: `-${appbarS}`,
  },
}));

export const Profile = styled(Stack)(() => ({
  boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
  padding: '16px',
  position: 'absolute',
  right: '0%',
  top: '60px',
  borderRadius: '16px',
  backgroundColor: 'rgba(247,198,142,0.9)',
  flexDirection: 'column',
  width: '300px',
  color: 'black',
  gap: '32px',
  [theme.breakpoints.down('lg')]: {
    width: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    textAlign: 'center',
    width: '200px',
  },
}));
