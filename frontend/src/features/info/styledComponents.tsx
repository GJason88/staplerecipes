import { Box, styled } from '@mui/material';

export const InfoBox = styled(Box)(() => ({
  display: 'flex',
  height: '132px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#AB5353',
  backgroundSize: 'cover',
  backgroundColor: 'red',
  boxShadow: 'inset 0 0 0 1000px rgba(249, 178, 98, 0.8), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  transition: '0.3s',
  ':hover': {
    boxShadow: 'inset 0 0 0 1000px rgba(249, 178, 98, 0.5), 0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
  },
}));
