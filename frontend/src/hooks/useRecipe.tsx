import { useQuery } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { setResult } from '../services/api/serviceReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const useRecipe = (recipeId: string) => {
  const dispatch = useDispatch();
  const { data: recipe } = useQuery('recipe', () => fetchRecipe(recipeId), {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  return camelcaseKeys(recipe ?? {}, { deep: true }) as RecipeState;
};

const fetchRecipe = async (recipeId: string) => {
  try {
    const response = await recipesApi.retrieve(recipeId);
    return response.data as { [key: string]: any };
  } catch (e) {
    // TODO: add some logging
    let message = 'Failed to fetch recipe';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    throw new Error(message);
  }
};

export default useRecipe;
