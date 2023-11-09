import { useQuery } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { setResult } from '../services/api/serviceReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const useRecipe = (recipeId: string) => {
  const dispatch = useDispatch();
  try {
    const { data: recipe } = useQuery('recipe', () => fetchRecipe(recipeId));
    return camelcaseKeys(recipe ?? {}, { deep: true }) as RecipeState;
  } catch (e) {
    let message = 'Failed to fetch recipe';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    dispatch(
      setResult({
        message,
        severity: 'error',
      })
    );
  }
  return {};
};

const fetchRecipe = async (recipeId: string) => {
  const response = await recipesApi.retrieve(recipeId);
  return response.data as { [key: string]: any };
};

export default useRecipe;
