import { useQuery } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { setResult } from '../services/api/serviceReducer';
import { useDispatch } from 'react-redux';
import catchError from './helpers/functions/catchError';

const useRecipe = (recipeId: string) => {
  const dispatch = useDispatch();
  const { data: recipe } = useQuery('recipe', () => fetchRecipe(recipeId), {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e) =>
      dispatch(setResult({ message: catchError(e), severity: 'error' })),
  });
  return camelcaseKeys(recipe ?? {}, { deep: true }) as RecipeState;
};

const fetchRecipe = async (recipeId: string) => {
  try {
    if (!recipeId) return;
    const response = await recipesApi.retrieve(recipeId);
    return response.data as { [key: string]: any };
  } catch (e) {
    Promise.reject(new Error(catchError(e)));
  }
};

export default useRecipe;
