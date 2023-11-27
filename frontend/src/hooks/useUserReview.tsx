import { reviewsApi } from '../services/api/server';
import useMutationHelper from './helpers/useMutationHelper';
import { getCurrentUserToken } from './helpers/functions/getCurrentUserToken';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import catchError from './helpers/functions/catchError';
import { setResult } from '../services/api/serviceReducer';

const useUserReview = (recipeId: string, uid: string) => {
  const dispatch = useDispatch();
  const { data: userReview } = useQuery(
    'currentUserReview',
    () => fetchUserReview(recipeId, uid),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (e) =>
        dispatch(setResult({ message: catchError(e), severity: 'error' })),
    }
  );
  const queriesToInvalidateOnMutate = ['currentUserReview', 'recipe'];
  const createReview = useMutationHelper(
    async (recipeId: string, data: NewReviewState) =>
      reviewsApi.create(recipeId, data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully created review'
  );
  const updateReview = useMutationHelper(
    async (reviewId: string, data: ExistingReviewState) =>
      reviewId &&
      reviewsApi.update(reviewId, data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully updated review'
  );
  const deleteReview = useMutationHelper(
    async (reviewId: string) =>
      reviewId && reviewsApi.delete(reviewId, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully deleted review'
  );
  return {
    userReview: camelcaseKeys(userReview ?? {}, {
      deep: true,
    }) as ExistingReviewState,
    createReview,
    updateReview,
    deleteReview,
  };
};

const fetchUserReview = async (recipeId: string, uid: string) => {
  if (!recipeId || !uid) return;
  try {
    const response = await reviewsApi.retrieve(
      recipeId,
      uid,
      await getCurrentUserToken()
    );
    return response.data as Array<ExistingReviewState>;
  } catch (e) {
    Promise.reject(new Error(catchError(e)));
  }
};

export default useUserReview;
