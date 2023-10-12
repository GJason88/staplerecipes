import NutritionPage from '../Nutrition/NutritionPage';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../redux/components/nav/navReducer';
import { useEffect } from 'react';

export default function Nutrition() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBreadcrumbs([{ name: 'Nutrition', href: '/nutrition' }]));
  }, [dispatch]);

  return <NutritionPage />;
}
