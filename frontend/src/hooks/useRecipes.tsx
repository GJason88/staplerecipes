import { useQuery } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { setResult } from '../services/api/serviceReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const useRecipes = () => {
  const { data: recipes } = useQuery('recipes', fetchRecipes);
  return camelcaseKeys(recipes ?? [], { deep: true });
};

const fetchRecipes = async () => {
  const dispatch = useDispatch();
  try {
    const response = await recipesApi.retrieveAll();
    return response.data as Array<RecipeCardState>;
  } catch (e) {
    let message = 'Failed to fetch recipes';
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
};

export default useRecipes;
