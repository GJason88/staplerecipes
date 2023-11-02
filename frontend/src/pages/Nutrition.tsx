import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { routes } from '../data/constants';
import NutritionTablePage from '../features/nutritiontable/NutritionTablePage';

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

  return <NutritionTablePage />;
}
