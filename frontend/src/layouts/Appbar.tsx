import Toolbar from '@mui/material/Toolbar';
import { Alert, Avatar, Box, IconButton } from '@mui/material';
import useAuth from '../hooks/useAuth';
import AccountDialog from '../features/account/AccountDialog';
import { AppbarButton, AppbarButtons, AppbarProfile, StyledAppbar } from './styledComponents';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { publicRoutes } from '../data/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRoute } from './layoutReducer';
import { IRootState } from '..';
import React from 'react';

export default function Appbar() {
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
            <IconButton aria-label='open drawer' sx={{ display: { sm: 'none' } }}>
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
                onClick={handleSignOut}
              />
            ) : (
              <AppbarProfile onClick={() => setDialogType('form')}>Sign In</AppbarProfile>
            )}
          </Toolbar>
        </StyledAppbar>
      </Box>
      {currentUser && !currentUser.emailVerified && (
        <Alert sx={{ borderRadius: 20, mt: '104px', mb: '-152px' }} severity='warning'>
          Please complete email verification
        </Alert>
      )}
    </>
  );
}
