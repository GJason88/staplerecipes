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
      <InfoBox
        onClick={() => navigate('/info/tools')}
        sx={{
          backgroundImage: 'url(/assets/tools.jpg)',
        }}
      >
        Tools
      </InfoBox>
      <InfoBox
        onClick={() => navigate('/info/ingredients')}
        sx={{
          backgroundImage: 'url(/assets/ingredients.png)',
        }}
      >
        Ingredients
      </InfoBox>
      <InfoBox
        onClick={() => navigate('/info/nutrition')}
        sx={{
          backgroundImage: 'url(/assets/nutrition.png)',
        }}
      >
        Nutritional Data
      </InfoBox>
    </Stack>
  );
}
