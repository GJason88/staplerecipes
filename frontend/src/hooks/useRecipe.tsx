import { useSelector } from 'react-redux';
import { IRootState } from '..';

export default function useRecipe() {
  const {
    recipeId,
    recipeName,
    time,
    diet,
    instructions,
    ingredients,
    tools,
    invalid,
  } = useSelector<IRootState, RecipeState>((state) => state.recipe);

  return {
    recipeId,
    recipeName,
    time,
    diet,
    instructions,
    ingredients,
    tools,
    invalid,
  };
}
