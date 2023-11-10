import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';

const useCategories = (type: 'tools' | 'ingredients') => {
  const dispatch = useDispatch();
  const { data: categories } = useQuery(
    'categories',
    () => fetchCategories(type),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (e: Error) =>
        dispatch(setResult({ message: e.message, severity: 'error' })),
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
    let message = 'Failed to fetch categories';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    throw new Error(message);
  }
};

export default useCategories;
