import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { IRootState } from '../../index';
import {
  updateIsMobile,
  updateIsSearchSelected,
} from '../../redux/components/nav/navReducer';
import { drawerWidth } from '../../constants';
// TODO: potentially remove
export default function TopAppBar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isSearchSelected = useSelector<IRootState, boolean>(
    (state) => state.nav.isSearchSelected
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
          {location.pathname === '/recipes/' && (
            <TextField
              variant='outlined'
              color='secondary'
              InputProps={{
                startAdornment: searchAdornment,
              }}
              onFocus={() => dispatch(updateIsSearchSelected(true))}
              onBlur={() => dispatch(updateIsSearchSelected(false))}
            ></TextField>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
