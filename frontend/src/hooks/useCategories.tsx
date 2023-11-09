import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';

const useCategories = (type: 'tools' | 'ingredients') => {
  const { data: categories } = useQuery(
    'categories',
    () => fetchCategories(type),
    {
      refetchOnWindowFocus: false,
    }
  );
  return camelcaseKeys(categories ?? [], { deep: true });
};

const fetchCategories = async (type: 'tools' | 'ingredients') => {
  const dispatch = useDispatch();
  try {
    const response =
      type === 'ingredients'
        ? await ingredientsApi.retrieveAllCategories()
        : await toolsApi.retrieveAllCategories();
    return response.data as Array<CategoryState>;
  } catch (e) {
    dispatch(
      setResult({ message: e.response.data, severity: 'error' })
    );
  }
};

export default useCategories;
