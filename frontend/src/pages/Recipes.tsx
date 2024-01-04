import { useEffect } from 'react';
import RecipeGridPage from '../features/recipegrid/RecipeGridPage';
import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { publicRoutes } from '../data/constants';

export default function Recipes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.recipes));
  }, [dispatch]);

  return <RecipeGridPage />;
}
