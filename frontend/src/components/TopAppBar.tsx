import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { IRootState } from '../index';
import { updateIsMobile } from '../redux/components/sidebar/sidebarReducer';
import { updateIsSearchSelected } from '../redux/components/topappbar/topAppBarReducer';
import { drawerWidth } from './Sidebar';

export default function TopAppBar() {
  const dispatch = useDispatch();
  const isSearchSelected = useSelector<IRootState, boolean>(
    (state) => state.topappbar.isSearchSelected
  );
  const searchAdornment = isSearchSelected ? null : (
    <InputAdornment position='start' disablePointerEvents>
      <SearchIcon fontSize='large' />
      <Typography sx={{ pl: '5px' }} fontSize={20}>
        Search for Recipes
      </Typography>
    </InputAdornment>
  );

  return (
    <div>
      <AppBar
        position='fixed'
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
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
          <TextField
            variant='outlined'
            color='secondary'
            InputProps={{
              startAdornment: searchAdornment,
            }}
            onFocus={() => dispatch(updateIsSearchSelected(true))}
            onBlur={() => dispatch(updateIsSearchSelected(false))}
          ></TextField>
        </Toolbar>
      </AppBar>
    </div>
  );
}
