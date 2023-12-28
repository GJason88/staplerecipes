import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';
import NutritionTablePage from '../features/nutritiontable/NutritionTablePage';

export default function Nutrition() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.info));
  }, [dispatch]);

  return <NutritionTablePage />;
}
