import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import useAuth from '../hooks/useAuth';
import AccountDialog from '../features/account/AccountDialog';
import {
  AppbarButton,
  AppbarButtons,
  AppbarContent,
  EmailVerificationAlert,
  MobileAppbarButton,
  MobileAppbarButtons,
  Profile,
  StyledAppbar,
} from './styledComponents';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { publicRoutes } from '../data/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRoute } from './layoutReducer';
import { IRootState } from '..';
import { useState } from 'react';

export default function Appbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeRoute = useSelector((state: IRootState) => state.layout.activeRoute);
  const { dialogType, setDialogType, currentUser, logout } = useAuth();
  const handleSignOut = () => {
    logout()
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        window.location.reload();
      });
  };
  const appbarButtons = (s: number, e?: number) =>
    Object.entries(publicRoutes)
      .slice(s, e)
      .map(([key, val], i) => (
        <AppbarButton
          key={i}
          value={val}
          selected={activeRoute === val}
          onClick={() => {
            dispatch(setActiveRoute(val));
            navigate(val);
          }}
        >
          {key.toUpperCase()}
        </AppbarButton>
      ));
  return (
    <>
      <Box>
        {!!dialogType && <AccountDialog />}
        <StyledAppbar>
          <AppbarContent>
            <IconButton
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='open drawer'
              sx={{ position: 'absolute', left: '16px', display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <AppbarButtons justifyContent='end'>{appbarButtons(0, 3)}</AppbarButtons>
            <img className='appbar-logo' src='/wheat-logo.png' />
            <AppbarButtons justifyContent='start'>{appbarButtons(3)}</AppbarButtons>
            {currentUser ? (
              <Avatar
                sx={{ position: 'absolute', right: '16px', ':hover': { cursor: 'pointer' } }}
                src={currentUser.photoURL ?? '/blank-profile.png'}
                onClick={() => setProfileOpen(!profileOpen)}
              />
            ) : (
              <Button
                sx={{ position: 'absolute', right: '16px', fontSize: '12px', fontWeight: 'medium' }}
                onClick={() => setDialogType('form')}
              >
                Sign In
              </Button>
            )}
            {profileOpen && (
              <Profile>
                <Stack>
                  <Typography sx={{ opacity: '50%' }}>Display Name:</Typography>
                  <Typography fontWeight='bold'>{currentUser?.displayName ?? 'Guest'}</Typography>
                </Stack>

                <Button onClick={handleSignOut} variant='outlined' fullWidth>
                  Sign Out
                </Button>
              </Profile>
            )}
            {menuOpen && (
              <MobileAppbarButtons>
                {Object.entries(publicRoutes).map(([key, val], i) => (
                  <MobileAppbarButton
                    key={i}
                    value={val}
                    selected={activeRoute === val}
                    onClick={() => {
                      dispatch(setActiveRoute(val));
                      navigate(val);
                    }}
                  >
                    {key.toUpperCase()}
                  </MobileAppbarButton>
                ))}
              </MobileAppbarButtons>
            )}
          </AppbarContent>
        </StyledAppbar>
      </Box>
      {currentUser && !currentUser.emailVerified && (
        <EmailVerificationAlert severity='warning'>Please complete email verification</EmailVerificationAlert>
      )}
    </>
  );
}
