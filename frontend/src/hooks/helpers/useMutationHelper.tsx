import { useDispatch } from 'react-redux';
import { setResult } from '../../services/api/serviceReducer';
import { MutationFunction, useMutation, useQueryClient } from 'react-query';
import catchError from './functions/catchError';

const useMutationHelper = (
  mutationFn: Function,
  queriesToInvalidate: Array<string>,
  successMsg?: string
) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: mutationFn as MutationFunction,
    onSuccess: async () => {
      queriesToInvalidate.forEach((query) =>
        queryClient.invalidateQueries([query])
      );
      dispatch(
        setResult({
          severity: 'success',
          message: successMsg ?? 'Success',
        })
      );
    },
    onError: (e: unknown) => {
      dispatch(setResult({ severity: 'error', message: catchError(e) }));
    },
  });
  return mutation.mutate;
};

export default useMutationHelper;
