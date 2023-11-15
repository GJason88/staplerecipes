import { useMutation, useQuery, useQueryClient } from 'react-query';
import { recipesApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import { setRecipe } from '../features/recipepage/recipeReducer';

const useRecipes = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { data: recipes } = useQuery('recipes', fetchRecipes, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  const deleteRecipe = useMutation({
    mutationFn: (id: string) => recipesApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['recipes']);
      dispatch(setRecipe(null));
      dispatch(
        setResult({
          severity: 'success',
          message: 'Successfully deleted recipe.',
        })
      );
    },
  });
  return {
    recipes: camelcaseKeys(recipes ?? [], { deep: true }),
    deleteRecipe: deleteRecipe.mutate,
  };
};

const fetchRecipes = async () => {
  try {
    const response = await recipesApi.retrieveAll();
    return response.data as Array<RecipeState>;
  } catch (e) {
    let message = 'Failed to fetch recipes';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    throw new Error(message);
  }
};

export default useRecipes;
