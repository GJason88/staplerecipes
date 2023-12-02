import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import IngredientsPage from '../features/ingredients/IngredientsPage';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';

export default function Tools() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: publicRoutes.ingredients.name, href: publicRoutes.ingredients.route },
      ])
    );
    dispatch(setActiveRoute(publicRoutes.ingredients.route));
  }, [dispatch]);

  return <IngredientsPage />;
}
