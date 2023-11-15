import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';
import { setIngredient } from '../features/admin/components/ingredients/adminIngredientsReducer';
import useErrorHandler from './useErrorHandler';

const useIngredients = () => {
  const dispatch = useDispatch();
  const errorHandler = useErrorHandler();
  const queryClient = useQueryClient();
  const { data: ingredients } = useQuery('ingredients', fetchIngredients, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  const mutationSuccess = (action: string) => {
    queryClient.invalidateQueries(['ingredients']);
    dispatch(
      setResult({
        severity: 'success',
        message: `Successfully ${action} ingredient.`,
      })
    );
  };
  const createIngredient = useMutation({
    mutationFn: (data: IngredientState) =>
      ingredientsApi.createIngredient(data),
    onSuccess: () => mutationSuccess('created'),
  });
  const updateIngredient = useMutation({
    mutationFn: ({ id, data }: { id: string; data: IngredientState }) =>
      ingredientsApi.updateIngredient(id, data),
    onSuccess: () => mutationSuccess('updated'),
    onError: errorHandler,
  });
  const deleteIngredient = useMutation({
    mutationFn: (id: string) => ingredientsApi.deleteIngredient(id),
    onSuccess: () => {
      dispatch(setIngredient(null));
      mutationSuccess('deleted');
    },
    onError: errorHandler,
  });
  return {
    ingredients: camelcaseKeys(ingredients ?? [], { deep: true }),
    createIngredient: createIngredient.mutate,
    updateIngredient: updateIngredient.mutate,
    deleteIngredient: deleteIngredient.mutate,
  };
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
