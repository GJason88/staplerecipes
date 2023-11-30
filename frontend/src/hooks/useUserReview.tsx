import { reviewsApi } from '../services/api/server';
import useMutationHelper from './helpers/useMutationHelper';
import { getCurrentUserToken } from './helpers/functions/getCurrentUserToken';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import catchError from './helpers/functions/catchError';
import { setResult } from '../services/api/serviceReducer';

const useUserReview = (recipeId: string) => {
  const dispatch = useDispatch();
  const { data: userReview } = useQuery(
    'currentUserReview',
    () => fetchUserReview(recipeId),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (e) =>
        dispatch(setResult({ message: catchError(e), severity: 'error' })),
    }
  );
  const queriesToInvalidateOnMutate = ['currentUserReview', 'recipe'];
  const createReview = useMutationHelper(
    async ({ recipeId, data }: { recipeId: string; data: ReviewState }) =>
      reviewsApi.create(recipeId, data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully created review'
  );
  const updateReview = useMutationHelper(
    async ({ recipeId, data }: { recipeId: string; data: ReviewState }) =>
      recipeId &&
      reviewsApi.update(recipeId, data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully updated review'
  );
  const deleteReview = useMutationHelper(
    async (recipeId: string) =>
      recipeId && reviewsApi.delete(recipeId, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully deleted review'
  );
  return {
    userReview: camelcaseKeys(userReview ?? {}, {
      deep: true,
    }) as ReviewState,
    createReview,
    updateReview,
    deleteReview,
  };
};

const fetchUserReview = async (recipeId: string) => {
  const userToken = await getCurrentUserToken();
  if (!userToken || !recipeId) return;
  try {
    const response = await reviewsApi.retrieve(recipeId, userToken);
    return response.data as Array<ReviewState>;
  } catch (e) {
    Promise.reject(new Error(catchError(e)));
  }
};

export default useUserReview;
