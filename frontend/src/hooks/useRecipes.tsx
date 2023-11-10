import { useQuery } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';

const useRecipes = () => {
  const dispatch = useDispatch();
  const { data: recipes } = useQuery('recipes', fetchRecipes, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  return camelcaseKeys(recipes ?? [], { deep: true });
};

const fetchRecipes = async () => {
  try {
    const response = await recipesApi.retrieveAll();
    return response.data as Array<RecipeCardState>;
  } catch (e) {
    let message = 'Failed to fetch recipes';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    throw new Error(message);
  }
};

export default useRecipes;
