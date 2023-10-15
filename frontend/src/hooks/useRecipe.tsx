import { useSelector } from 'react-redux';
import { IRootState } from '..';
import { RecipeState } from '../features/recipepage/recipeReducer';

export default function useRecipe() {
  const {
    recipeId,
    recipeName,
    time,
    nutrition,
    ingredients,
    tools,
    instructions,
    invalid,
  } = useSelector<IRootState, RecipeState>((state) => state.recipe);

  return {
    recipeId,
    recipeName,
    time,
    nutrition,
    ingredients,
    tools,
    instructions,
    invalid,
  };
}
