import Toolbar from '@mui/material/Toolbar';
import { Alert, Avatar, Box, IconButton } from '@mui/material';
import useAuth from '../hooks/useAuth';
import AccountDialog from '../features/account/AccountDialog';
import { AppbarButton, AppbarButtons, AppbarProfile, StyledAppbar } from './styledComponents';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
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
              <AppbarButton className=' .appbar-button'>HOME</AppbarButton>
              <AppbarButton className='appbar-button'>RECIPES</AppbarButton>
              <AppbarButton className='appbar-button'>INFO</AppbarButton>
              <img className='appbar-logo' src='/wheat-logo.png' />
              <AppbarButton className='appbar-button'>SHOP</AppbarButton>
              <AppbarButton className='appbar-button'>ABOUT</AppbarButton>
            </AppbarButtons>
            {currentUser ? (
              // TODO: build profile dialog
              <Avatar sx={{ ':hover': { cursor: 'pointer' } }} src='/blank-profile.png' onClick={handleSignOut} />
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
