import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';

const useIngredients = () => {
  const dispatch = useDispatch();
  try {
    const { data: ingredients } = useQuery('ingredients', fetchIngredients);
    return ingredients ? camelcaseKeys(ingredients, { deep: true }) : [];
  } catch (e) {
    let message = 'Failed to fetch ingredients';
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

const fetchIngredients = async () => {
  const response = await ingredientsApi.retrieveAllIngredients();
  return response.data as Array<IngredientState>;
};

export default useIngredients;
