import { useEffect } from 'react';
import RecipeGrid from '../recipes/RecipeGrid';
import { useDispatch } from 'react-redux';
import {
  setActiveRoute,
  setBreadcrumbs,
} from '../../redux/components/nav/navReducer';
import { routes } from '../../constants';

export default function Recipes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: routes.recipes.name, href: routes.recipes.route },
      ])
    );
    dispatch(setActiveRoute(routes.recipes.route));
  }, [dispatch]);

  return <RecipeGrid />;
}
