import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import { publicRoutes } from '../data/constants';
import RecipePage from '../features/recipepage/RecipePage';
import useRecipe from '../hooks/useRecipe';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

export default function Recipe() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const recipe = useRecipe(routeParams.id ?? '');
  const queryClient = useQueryClient();
  useEffect(() => {
    return () => {
      queryClient.removeQueries(['recipe']); // prevent previous rendered recipe data from being rendered.
    };
  }, [queryClient]);

  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: publicRoutes.recipes.name, href: publicRoutes.recipes.route },
        {
          name: recipe.recipeName,
          href: `${publicRoutes.recipes.route}/${recipe.recipeId}`,
        },
      ])
    );
    dispatch(setActiveRoute(publicRoutes.recipes.route));
  }, [dispatch, recipe]);

  return !Object.keys(recipe).length ? <></> : <RecipePage recipe={recipe} />;
}
