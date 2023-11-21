import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { updateIsMobile } from './layoutReducer';
import { drawerWidth } from '../data/constants';
import { Breadcrumbs, Button, Link, Stack, Typography } from '@mui/material';
import { IRootState } from '..';
import useAuth from '../hooks/useAuth';
import AccountDialog from '../features/account/AccountDialog';

export default function TopAppBar() {
  const dispatch = useDispatch();
  const { dialogType, setDialogType, currentUser, logout } = useAuth();
  const breadcrumbs = useSelector<IRootState, Array<BreadcrumbState>>(
    (state) => state.layout.breadcrumbs
  );
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
    <div>
      {!!dialogType && <AccountDialog />}
      <AppBar
        position='fixed'
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={() => dispatch(updateIsMobile())}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Breadcrumbs sx={{ fontSize: 18 }} separator='›'>
            {breadcrumbs.slice(0, -1).map((breadcrumb, index) => (
              <Link
                underline='hover'
                key={index}
                color='inherit'
                href={breadcrumb.href}
              >
                {breadcrumb.name}
              </Link>
            ))}
            <Typography fontSize={18}>
              {breadcrumbs.length > 0 &&
                breadcrumbs[breadcrumbs.length - 1].name}
            </Typography>
          </Breadcrumbs>
          <Stack gap={2} ml='auto' flexDirection='row'>
            {currentUser ? (
              <>
                <Typography alignSelf='center'>
                  Signed in as {currentUser.displayName ?? currentUser.email}
                </Typography>
                <Button onClick={handleSignOut}>Sign Out</Button>
              </>
            ) : (
              <Button onClick={() => setDialogType('form')}>Sign In</Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}
