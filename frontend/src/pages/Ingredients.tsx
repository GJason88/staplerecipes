import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import IngredientsPage from '../features/ingredients/IngredientsPage';
import { useEffect } from 'react';
import { routes } from '../data/constants';

export default function Tools() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: routes.ingredients.name, href: routes.ingredients.route },
      ])
    );
    dispatch(setActiveRoute(routes.ingredients.route));
  }, [dispatch]);

  return <IngredientsPage />;
}
