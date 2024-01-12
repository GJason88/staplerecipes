import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import useMutationHelper from './helpers/useMutationHelper';
import getCurrentUserToken from './helpers/functions/getCurrentUserToken';
import catchError from './helpers/functions/catchError';

const useIngredients = () => {
  const dispatch = useDispatch();
  const { data: ingredients } = useQuery('ingredients', fetchIngredients, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e) => dispatch(setResult({ message: catchError(e), severity: 'error' })),
  });
  const queriesToInvalidateOnMutate = ['ingredients'];
  const createIngredient = useMutationHelper(
    async (data: IngredientState) => ingredientsApi.createIngredient(data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully created ingredient'
  );
  const updateIngredient = useMutationHelper(
    async ({ id, data }: { id: string; data: IngredientState }) =>
      ingredientsApi.updateIngredient(id, data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully updated ingredient'
  );
  const deleteIngredient = useMutationHelper(
    async (id: string) => ingredientsApi.deleteIngredient(id, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully deleted ingredient'
  );
  return {
    ingredients: camelcaseKeys(ingredients ?? [], { deep: true }),
    createIngredient,
    updateIngredient,
    deleteIngredient,
  };
};

const fetchIngredients = async () => {
  try {
    const response = await ingredientsApi.retrieveAllIngredients();
    return response.data as Array<IngredientState>;
  } catch (e) {
    throw new Error(catchError(e));
  }
};

export default useIngredients;
