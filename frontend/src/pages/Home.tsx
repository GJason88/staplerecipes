import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import { publicRoutes } from '../data/constants';
import { Box, Typography } from '@mui/material';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([{ name: publicRoutes.home.name, href: publicRoutes.home.route }])
    );
    dispatch(setActiveRoute(publicRoutes.home.route));
  }, [dispatch]);

  return (
    <Box pl={2} pt={10}>
      <Typography sx={{ pt: 2 }}>
        Staple Recipes is a modern, no-frills take on recipes. We aim to provide
        an easy-to-navigate repository of recipes using a set list of common
        pantry staples and other ubiquitous ingredients that can be made with
        standard kitchen tools. All of our recipes are focused on being quick
        and easy to make with minimal cleanup, while also being delicious.
      </Typography>
    </Box>
  );
}
