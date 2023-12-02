import { useQuery } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import catchError from './helpers/functions/catchError';
import getCurrentUserToken from './helpers/functions/getCurrentUserToken';
import useMutationHelper from './helpers/useMutationHelper';
import uploadImage from './helpers/functions/uploadImage';
import deleteImage from './helpers/functions/deleteImage';

const useRecipes = () => {
  const dispatch = useDispatch();
  const { data: recipes } = useQuery('recipes', fetchRecipes, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e) => dispatch(setResult({ message: catchError(e), severity: 'error' })),
  });
  const queriesToInvalidateOnMutate = ['recipes'];
  const createRecipe = useMutationHelper(
    async ({ data, image }: { data: RecipeState; image: File | null }) => {
      const response = await recipesApi.create(data, await getCurrentUserToken());
      const recipeId = response.data as string;
      await uploadImage(recipeId, image);
    },
    queriesToInvalidateOnMutate,
    'Successfully created recipe'
  );
  const updateRecipe = useMutationHelper(
    async ({ recipeId, data, image }: { recipeId: string; data: RecipeState; image: File | null }) => {
      await recipesApi.update(recipeId, data, await getCurrentUserToken());
      await uploadImage(recipeId, image);
    },
    queriesToInvalidateOnMutate,
    'Successfully updated recipe'
  );
  const deleteRecipe = useMutationHelper(
    async (recipeId: string) => {
      await recipesApi.delete(recipeId, await getCurrentUserToken());
      await deleteImage(recipeId);
    },
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
    throw new Error(catchError(e));
  }
};

export default useRecipes;
