import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';

const useIngredients = () => {
  const { data: ingredients } = useQuery('ingredients', fetchIngredients);
  return camelcaseKeys(ingredients ?? [], { deep: true });
};

const fetchIngredients = async () => {
  const dispatch = useDispatch();
  try {
    const response = await ingredientsApi.retrieveAllIngredients();
    return response.data as Array<IngredientState>;
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

export default useIngredients;
