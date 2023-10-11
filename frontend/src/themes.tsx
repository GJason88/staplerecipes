import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#686868',
    },
    background: {
      default: '#f0f0f0',
      paper: '#f8f8f8',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#373737',
          color: '#d5d5d5',
          // set selected color to f0f0f0
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f0f0',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#d5d5d5',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#424242',
          },
          '&.Mui-selected': {
            backgroundColor: '#424242',
            '&:hover': {
              backgroundColor: '#424242',
            },
            '& .MuiTypography-root': {
              fontWeight: 500,
              color: 'white',
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          },
        },
      },
    },
  },
});
