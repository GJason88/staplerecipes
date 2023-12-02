import { useEffect } from 'react';
import RecipeGridPage from '../features/recipegrid/RecipeGridPage';
import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import { publicRoutes } from '../data/constants';

export default function Recipes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: publicRoutes.recipes.name, href: publicRoutes.recipes.route },
      ])
    );
    dispatch(setActiveRoute(publicRoutes.recipes.route));
  }, [dispatch]);

  return <RecipeGridPage />;
}
