import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';
import { Stack } from '@mui/material';
import { InfoBox } from '../features/info/styledComponents';

export default function Info() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.info));
  }, [dispatch]);

  return (
    <Stack width='100%' gap='32px'>
      <InfoBox
        sx={{
          backgroundImage: 'url(/assets/tools.jpg)',
        }}
      >
        Tools
      </InfoBox>
      <InfoBox
        sx={{
          backgroundImage: 'url(/assets/ingredients.png)',
        }}
      >
        Ingredients
      </InfoBox>
      <InfoBox
        sx={{
          backgroundImage: 'url(/assets/nutrition.png)',
        }}
      >
        Nutritional Data
      </InfoBox>
    </Stack>
  );
}
