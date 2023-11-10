import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';

const useIngredients = () => {
  const dispatch = useDispatch();
  const { data: ingredients } = useQuery('ingredients', fetchIngredients, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  return camelcaseKeys(ingredients ?? [], { deep: true });
};

const fetchIngredients = async () => {
  try {
    const response = await ingredientsApi.retrieveAllIngredients();
    return response.data as Array<IngredientState>;
  } catch (e) {
    let message = 'Failed to fetch recipe';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    throw new Error(message);
  }
};

export default useIngredients;
