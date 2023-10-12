import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  setSnackBar,
  updateIsMobile,
} from '../../redux/components/nav/navReducer';
import { IRootState } from '../../index';
import { useNavigate } from 'react-router-dom';
import { drawerWidth, sidebarItems } from '../../constants';
import { Alert, Button, Snackbar } from '@mui/material';

export default function Sidebar() {
  const pathList = location.pathname.match(/[/][^/]+/g);
  const [activeRoute, setActiveRoute] = useState(
    // could put into store and get from each route if needed
    (pathList && pathList[0]) || '/'
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useSelector<IRootState, boolean>(
    (state) => state.nav.isMobile
  );
  const snackbar = useSelector<IRootState, string>(
    (state) => state.nav.snackbar
  );
  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setSnackBar(''));
  };

  const drawer = (
    <Box>
      <Button
        disableRipple
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
          textTransform: 'none',
          width: '100%',
        }}
      >
        <img
          src='/assets/darklogo-612x612.png'
          width='75'
          style={{ marginLeft: -15, marginRight: -12 }}
        />
        <Typography
          pl='9px'
          align='center'
          variant='h5'
          marginBottom={'-10px'}
          color='#bc544b'
          fontWeight={600}
          fontFamily={'cursive'}
        >
          Staple Recipes
        </Typography>
      </Button>
      <List>
        {sidebarItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ height: 50, mt: 1, p: 1 }}>
            <ListItemButton
              sx={{ height: 50, borderRadius: 3 }}
              onClick={() => {
                setActiveRoute(item.route);
                navigate(item.route);
              }}
              selected={item.route === activeRoute}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component='nav'
      sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 }, boxShadow: 1 }}
      aria-label='mailbox folders'
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant='temporary'
        open={isMobile}
        onClose={() => dispatch(updateIsMobile())}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
      {snackbar && (
        <Snackbar
          onClose={handleSnackbarClose}
          open={true}
          autoHideDuration={3000}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            {snackbar}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
}
