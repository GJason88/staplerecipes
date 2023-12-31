import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import useAuth from '../hooks/useAuth';
import AccountDialog from '../features/account/AccountDialog';
import {
  AppbarButton,
  AppbarButtons,
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
import React, { useState } from 'react';

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
  return (
    <>
      <Box>
        {!!dialogType && <AccountDialog />}
        <StyledAppbar>
          <Toolbar>
            <IconButton
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='open drawer'
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <AppbarButtons>
              {Object.entries(publicRoutes).map(([key, val], i) => (
                <React.Fragment key={i}>
                  <AppbarButton
                    value={val}
                    selected={activeRoute === val}
                    onClick={() => {
                      dispatch(setActiveRoute(val));
                      navigate(val);
                    }}
                  >
                    {key.toUpperCase()}
                  </AppbarButton>
                  {i === 2 && <img className='appbar-logo' src='/wheat-logo.png' />}
                </React.Fragment>
              ))}
            </AppbarButtons>
            {currentUser ? (
              // TODO: build profile dialog
              <Avatar
                sx={{ ':hover': { cursor: 'pointer' } }}
                src={currentUser.photoURL ?? '/blank-profile.png'}
                onClick={() => setProfileOpen(!profileOpen)}
              />
            ) : (
              <Button sx={{ fontSize: '12px', fontWeight: 'medium' }} onClick={() => setDialogType('form')}>
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
          </Toolbar>
        </StyledAppbar>
      </Box>
      {currentUser && !currentUser.emailVerified && (
        <EmailVerificationAlert severity='warning'>Please complete email verification</EmailVerificationAlert>
      )}
    </>
  );
}
