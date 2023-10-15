import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '..';
import {
  setActiveRoute,
  setBreadcrumbs,
} from '../redux/components/nav/navReducer';
import { routes } from '../constants';
import RecipePage from '../components/recipes/recipe/RecipePage';

export default function Recipe() {
  const dispatch = useDispatch();
  const recipeName = useSelector<IRootState, string>(
    (state) => state.recipe.recipeName
  );
  const recipeId = useSelector<IRootState, number | null>(
    (state) => state.recipe.recipeId
  );
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: routes.recipes.name, href: routes.recipes.route },
        { name: recipeName, href: `${routes.recipes.route}/${recipeId}` },
      ])
    );
    dispatch(setActiveRoute(routes.recipes.route));
  }, [dispatch, recipeId, recipeName]);

  return <RecipePage />;
}
