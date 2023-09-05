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
import { updateIsMobile } from '../redux/components/sidebar/sidebarReducer';
import { IRootState } from '../index';
import AdbIcon from '@mui/icons-material/Adb';

export const drawerWidth = 240;

export default function Sidebar() {
  const dispatch = useDispatch();
  const isMobile = useSelector<IRootState, boolean>(
    (state) => state.sidebar.isMobile
  );
  const isHomeSelected = useSelector<IRootState, boolean>(
    (state) => state.sidebar.isHomeSelected
  );
  const drawer = (
    <div>
      <Toolbar>
        {/*placeholder logo*/}
        <AdbIcon />
        <Typography paddingLeft='9px' align='center' variant='h5'>
          Staple Recipes
        </Typography>
      </Toolbar>
      <List>
        {['Home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton selected={isHomeSelected}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
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
    </Box>
  );
}
