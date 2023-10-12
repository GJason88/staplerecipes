import { useEffect } from 'react';
import EditRecipe from '../recipes/recipe/EditRecipe';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import { setBreadcrumbs } from '../../redux/components/nav/navReducer';

export default function Recipe() {
  const dispatch = useDispatch();
  const recipeName = useSelector<IRootState, string>(
    (state) => state.recipe.recipeName
  );
  const recipeId = useSelector<IRootState, number>(
    (state) => state.recipe.recipeId
  );
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { name: 'Recipes', href: '/recipes' },
        { name: recipeName, href: `/recipes/${recipeId}` },
      ])
    );
  }, [dispatch, recipeId, recipeName]);

  return <EditRecipe />;
}
