import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
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
    dispatch(setActiveRoute(publicRoutes.recipes));
  }, [dispatch, recipe]);

  return !Object.keys(recipe).length ? <></> : <RecipePage recipe={recipe} />;
}
