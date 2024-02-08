import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';
import { Box } from '@mui/material';

export default function Nutrition() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.info));
  }, [dispatch]);

  return (
    <Box display='flex' fontSize='48px' width='100%' justifyContent='center'>

    </Box>
  );
}
