import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';

const useCategories = (type: 'tools' | 'ingredients') => {
  const dispatch = useDispatch();
  try {
    const { data: categories } = useQuery(
      'categories',
      () => fetchCategories(type),
      {
        refetchOnWindowFocus: false,
      }
    );
    return camelcaseKeys(categories ?? [], { deep: true });
  } catch (e) {
    let message = 'Failed to fetch categories';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    dispatch(
      setResult({
        message,
        severity: 'error',
      })
    );
  }
  return [];
};

const fetchCategories = async (type: 'tools' | 'ingredients') => {
  const response =
    type === 'ingredients'
      ? await ingredientsApi.retrieveAllCategories()
      : await toolsApi.retrieveAllCategories();
  return response.data as Array<CategoryState>;
};

export default useCategories;
