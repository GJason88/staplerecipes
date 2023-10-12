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
          backgroundColor: '#f0f0f0',
          color: '#424242',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f0f0',
          color: 'black',
          '& .MuiTypography-root': {
            fontWeight: 500,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#424242',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#d5d5d5',
          },
          '&.Mui-selected': {
            backgroundColor: '#d5d5d5',
            '&:hover': {
              backgroundColor: '#d5d5d5',
            },
            '& .MuiTypography-root': {
              fontWeight: 500,
              color: 'black',
            },
            '& .MuiSvgIcon-root': {
              color: 'black',
            },
          },
        },
      },
    },
  },
});
