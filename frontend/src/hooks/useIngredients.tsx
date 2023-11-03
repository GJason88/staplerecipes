import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';

const useIngredients = () => {
  const { data: ingredients } = useQuery('ingredients', fetchIngredients);
  return ingredients ?? [];
};

const fetchIngredients = async () => {
  const response = await ingredientsApi.retrieveAllIngredients();
  camelcaseKeys(response.data, { deep: true });
  return response.data as Array<IngredientState>;
};

export default useIngredients;
