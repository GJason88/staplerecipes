import NutritionPage from '../Nutrition/NutritionPage';
import { useDispatch } from 'react-redux';
import {
  setActiveRoute,
  setBreadcrumbs,
} from '../../redux/components/nav/navReducer';
import { useEffect } from 'react';
import { routes } from '../../constants';

export default function Nutrition() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: routes.nutrition.name, href: routes.nutrition.route },
      ])
    );
    dispatch(setActiveRoute(routes.nutrition.route));
  }, [dispatch]);

  return <NutritionPage />;
}
