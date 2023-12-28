import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { publicRoutes } from '../data/constants';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.home));
  }, [dispatch]);

  return (
    <Stack alignItems='center' gap='64px'>
      <Typography textAlign='center' fontWeight='bold' fontSize={48}>
        STAPLE RECIPES
      </Typography>
      <Stack gap='24px'>
        <Typography color='black' textAlign='center' fontWeight='medium' fontSize={24}>
          Staple Recipes is a modern, no-frills take on a recipes page.
        </Typography>
        <Typography color='black' textAlign='center' fontWeight='medium' fontSize={24}>
          The aim is to provide an easy-to-navigate repository of recipes using a set list of common pantry staples and
          other ubiquitous ingredients that can be made with standard kitchen tools. All of the recipes are focused on
          being easy, flavorful, and nutritious.
        </Typography>
      </Stack>
      <Button
        sx={{
          mt: '48px',
          p: '12px 24px',
          fontWeight: 'bold',
          fontSize: 28,
          borderRadius: '16px',
          border: '3px solid',
          backgroundColor: 'rgba(249, 178, 98, 1)',
          ':hover': { backgroundColor: 'rgba(249, 178, 98, 0.5)', border: '3px solid' },
        }}
        variant='outlined'
        onClick={() => navigate(publicRoutes.recipes)}
      >
        Check out the recipes
      </Button>
    </Stack>
  );
}
