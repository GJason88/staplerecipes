import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import catchError from './helpers/functions/catchError';

const useCategories = (type: 'tools' | 'ingredients') => {
  const dispatch = useDispatch();
  const { data: categories } = useQuery(
    'categories',
    () => fetchCategories(type),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (e) =>
        dispatch(setResult({ message: catchError(e), severity: 'error' })),
    }
  );
  return camelcaseKeys(categories ?? [], { deep: true });
};

const fetchCategories = async (type: 'tools' | 'ingredients') => {
  try {
    const response =
      type === 'ingredients'
        ? await ingredientsApi.retrieveAllCategories()
        : await toolsApi.retrieveAllCategories();
    return response.data as Array<CategoryState>;
  } catch (e) {
    Promise.reject(new Error(catchError(e)));
  }
};

export default useCategories;
