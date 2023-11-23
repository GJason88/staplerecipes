import { useQuery } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import catchError from './helpers/functions/catchError';
import { getCurrentUserToken } from './helpers/functions/getCurrentUserToken';
import useMutationHelper from './helpers/useMutationHelper';

const useRecipes = () => {
  const dispatch = useDispatch();
  const { data: recipes } = useQuery('recipes', fetchRecipes, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e) =>
      dispatch(setResult({ message: catchError(e), severity: 'error' })),
  });
  const queriesToInvalidateOnMutate = ['recipes'];
  const createRecipe = useMutationHelper(
    async (data: RecipeState) =>
      recipesApi.create(data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully created recipe'
  );
  const updateRecipe = useMutationHelper(
    async ({ id, data }: { id: string; data: RecipeState }) =>
      recipesApi.update(id, data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully updated recipe'
  );
  const deleteRecipe = useMutationHelper(
    async (id: string) => recipesApi.delete(id, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully deleted recipe'
  );
  return {
    recipes: camelcaseKeys(recipes ?? [], { deep: true }),
    createRecipe,
    updateRecipe,
    deleteRecipe,
  };
};

const fetchRecipes = async () => {
  try {
    const response = await recipesApi.retrieveAll();
    return response.data as Array<RecipeState>;
  } catch (e) {
    Promise.reject(new Error(catchError(e)));
  }
};

export default useRecipes;
