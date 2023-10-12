import { useEffect } from 'react';
import RecipeGrid from '../recipes/RecipeGrid';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../redux/components/nav/navReducer';

export default function Recipes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBreadcrumbs([{ name: 'Recipes', href: '/recipes' }]));
  }, [dispatch]);

  return <RecipeGrid />;
}
