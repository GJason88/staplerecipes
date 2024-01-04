import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';
import { Box, Typography } from '@mui/material';

export default function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.about));
  }, [dispatch]);

  return (
    <Box display='flex' fontSize='48px' width='100%' justifyContent='center'>
      <Typography fontSize='64px' fontStyle='italic'>
        Coming Soon
      </Typography>
    </Box>
  );
}
