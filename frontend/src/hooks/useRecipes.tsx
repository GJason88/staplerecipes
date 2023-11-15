import { useMutation, useQuery, useQueryClient } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import { setRecipe } from '../features/recipepage/recipeReducer';
import catchError from './helpers/catchError';
import useErrorHandler from './useErrorHandler';

const useRecipes = () => {
  const dispatch = useDispatch();
  const errorHandler = useErrorHandler();
  const queryClient = useQueryClient();
  const { data: recipes } = useQuery('recipes', fetchRecipes, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  const mutationSuccess = (action: string) => {
    queryClient.invalidateQueries(['recipes']);
    dispatch(
      setResult({
        severity: 'success',
        message: `Successfully ${action} recipe.`,
      })
    );
  };
  const createRecipe = useMutation({
    mutationFn: (data: RecipeState) => recipesApi.create(data),
    onSuccess: () => mutationSuccess('created'),
  });
  const updateRecipe = useMutation({
    mutationFn: ({ id, data }: { id: string; data: RecipeState }) =>
      recipesApi.update(id, data),
    onSuccess: () => mutationSuccess('updated'),
    onError: errorHandler,
  });
  const deleteRecipe = useMutation({
    mutationFn: (id: string) => recipesApi.delete(id),
    onSuccess: () => {
      dispatch(setRecipe(null));
      mutationSuccess('deleted');
    },
    onError: errorHandler,
  });
  return {
    recipes: camelcaseKeys(recipes ?? [], { deep: true }),
    createRecipe: createRecipe.mutate,
    updateRecipe: updateRecipe.mutate,
    deleteRecipe: deleteRecipe.mutate,
  };
};

const fetchRecipes = async () => {
  try {
    const response = await recipesApi.retrieveAll();
    return response.data as Array<RecipeState>;
  } catch (e) {
    throw new Error(catchError(e));
  }
};

export default useRecipes;
