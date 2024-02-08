import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';
import { Stack } from '@mui/material';
import { InfoBox } from '../features/info/styledComponents';
import { useNavigate } from 'react-router-dom';

export default function Info() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.info));
  }, [dispatch]);

  return (
    <Stack width='100%' gap='32px'>
      <InfoBox onClick={() => navigate('/info/tools')}>Tools</InfoBox>
      <InfoBox onClick={() => navigate('/info/ingredients')}>Ingredients</InfoBox>
      <InfoBox onClick={() => navigate('/info/nutrition')}>Nutritional Data</InfoBox>
    </Stack>
  );
}
