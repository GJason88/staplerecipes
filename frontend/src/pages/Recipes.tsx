import { useEffect } from 'react';
import RecipeGridPage from '../features/recipegrid/RecipeGridPage';
import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../redux/layout/layoutReducer';
import { routes } from '../data/constants';

export default function Recipes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: routes.recipes.name, href: routes.recipes.route },
      ])
    );
    dispatch(setActiveRoute(routes.recipes.route));
  }, [dispatch]);

  return <RecipeGridPage />;
}
