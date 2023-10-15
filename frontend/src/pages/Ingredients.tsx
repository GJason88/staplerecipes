import { useDispatch } from 'react-redux';
import {
  setActiveRoute,
  setBreadcrumbs,
} from '../redux/components/nav/navReducer';
import IngredientsPage from '../components/ingredients/IngredientsPage';
import { useEffect } from 'react';
import { routes } from '../constants';

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
