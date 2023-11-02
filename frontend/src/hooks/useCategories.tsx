import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';

const useCategories = (type: 'tools' | 'ingredients') => {
  const { data } = useQuery('categories', () => fetchCategories(type), {
    refetchOnWindowFocus: false,
  });
  const categories = camelcaseKeys(data ?? []);
  return categories;
};

const fetchCategories = async (type: 'tools' | 'ingredients') => {
  const response: { data: { data: { [key: string]: string } } } =
    type === 'ingredients'
      ? await ingredientsApi.retrieveAllCategories()
      : await toolsApi.retrieveAllCategories();
  return response.data;
};

export default useCategories;
