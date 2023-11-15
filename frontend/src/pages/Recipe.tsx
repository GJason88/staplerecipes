import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import { routes } from '../data/constants';
import RecipePage from '../features/recipepage/RecipePage';
import useRecipe from '../hooks/useRecipe';
import { useParams } from 'react-router-dom';

export default function Recipe() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const recipe = useRecipe(routeParams.id ?? '');
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: routes.recipes.name, href: routes.recipes.route },
        {
          name: recipe.recipeName,
          href: `${routes.recipes.route}/${recipe.recipeId}`,
        },
      ])
    );
    dispatch(setActiveRoute(routes.recipes.route));
  }, [dispatch, recipe]);

  return !Object.keys(recipe).length ? <></> : <RecipePage recipe={recipe} />;
}
