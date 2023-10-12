import { useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { updateIsMobile } from '../../redux/components/nav/navReducer';
import { drawerWidth } from '../../constants';
import { Box, Button, Typography } from '@mui/material';

export default function TopAppBar() {
  const dispatch = useDispatch();

  return (
    <div>
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
          <Typography fontSize={18}>Recipes</Typography>
          <Box marginLeft='auto'>
            <Button>Log In</Button>|<Button>Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
