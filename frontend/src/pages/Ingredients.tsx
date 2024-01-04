import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import IngredientsPage from '../features/ingredients/IngredientsPage';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';

export default function Ingredients() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.info));
  }, [dispatch]);

  return <IngredientsPage />;
}
