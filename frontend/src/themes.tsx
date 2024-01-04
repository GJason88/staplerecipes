import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#AB5353',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#FFD495',
      paper: 'rgba(247,198,142,0.9)',
    },
    text: {
      primary: '#000000',
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
