import { Box, styled } from '@mui/material';

export const InfoBox = styled(Box)(() => ({
  display: 'flex',
  height: '96px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  border: '1px solid rgba(0,0,0,0.25)',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#AB5353',
  transition: '0.3s',
  ':hover': {
    boxShadow: 'inset 0 0 0 1000px rgba(249, 178, 98, 0.4)',
    cursor: 'pointer',
  },
}));
