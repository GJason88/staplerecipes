import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setActiveRoute,
  setBreadcrumbs,
} from '../redux/layout/layoutReducer';
import { routes } from '../data/constants';
import { Box, Typography } from '@mui/material';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([{ name: routes.home.name, href: routes.home.route }])
    );
    dispatch(setActiveRoute(routes.home.route));
  }, [dispatch]);

  return (
    <Box pl={2} pt={10}>
      <Typography>
        Tired of buying obscure tools and ingredients that you only use once to
        follow a recipe you found on the web?
      </Typography>
      <Typography sx={{ pt: 2 }}>
        How about trying to find the chicken stir-fry recipe you followed last
        month on a recipe site containing 125 chicken stir-fry recipes under 20
        different categories?
      </Typography>
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
