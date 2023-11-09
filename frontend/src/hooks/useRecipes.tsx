import { useQuery } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';

const useRecipes = () => {
  const dispatch = useDispatch();
  try {
    const { data: recipes } = useQuery('recipes', fetchRecipes);
    return recipes ? camelcaseKeys(recipes, { deep: true }) : [];
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
    console.log(message);
  }
};

const fetchRecipes = async () => {
  const response = await recipesApi.retrieveAll();
  return response.data as Array<RecipeCardState>;
};

export default useRecipes;
