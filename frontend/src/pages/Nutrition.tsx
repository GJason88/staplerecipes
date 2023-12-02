import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';
import NutritionTablePage from '../features/nutritiontable/NutritionTablePage';

export default function Nutrition() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: publicRoutes.nutrition.name, href: publicRoutes.nutrition.route },
      ])
    );
    dispatch(setActiveRoute(publicRoutes.nutrition.route));
  }, [dispatch]);

  return <NutritionTablePage />;
}
