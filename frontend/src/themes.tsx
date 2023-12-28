import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#AB5353',
    },
    background: {
      default: '#FFD495',
      paper: '#FFD495',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'url(/pantry.jpg)',
          backgroundSize: '400px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFD495',
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
  },
});
