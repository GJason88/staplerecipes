import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  setSnackBar,
  updateIsMobile,
  updatePath,
} from '../../redux/components/nav/navReducer';
import { IRootState } from '../../index';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { drawerWidth } from '../../constants';
import FlatwareIcon from '@mui/icons-material/Flatware';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FeedIcon from '@mui/icons-material/Feed';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { Alert, Snackbar } from '@mui/material';

// put into separate constants file
const icons = [
  <HomeIcon key='home' />,
  <MenuBookTwoToneIcon key='recipes' />,
  <FlatwareIcon key='tools' />,
  <KitchenIcon key='ingredients' />,
  <FeedIcon key='nutrition' />,
  <CalendarViewMonthIcon key='mealplan' />,
];
const routes = [
  '/',
  '/recipes',
  '/tools',
  '/ingredients',
  '/nutrition',
  '/mealplans',
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useSelector<IRootState, boolean>(
    (state) => state.nav.isMobile
  );
  const path = useSelector<IRootState, string>((state) => state.nav.path);
  const snackbar = useSelector<IRootState, string>(
    (state) => state.nav.snackbar
  );
  useEffect(() => {
    dispatch(updatePath(location.pathname)); // TODO: make better solution
  }, [location.pathname]);

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
      <Toolbar>
        <img
          src='/assets/logo-612x612.png'
          width='75'
          style={{ marginLeft: -15, marginRight: -12 }}
        />
        <Typography
          pl='9px'
          align='center'
          variant='h5'
          marginRight={'-30px'}
          marginBottom={'-10px'}
        >
          Staple Recipes
        </Typography>
      </Toolbar>
      <List>
        {[
          'Home',
          'Recipes',
          'Tools',
          'Ingredients',
          'Nutrition',
          'Meal Plans',
        ].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ height: 75 }}>
            <ListItemButton
              sx={{ height: 75 }}
              onClick={() => navigate(routes[index])}
              selected={routes[index] === path}
            >
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component='nav'
      sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
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
