import { useQuery } from 'react-query';
import { ingredientsApi } from '../services/api/server';
import { toolsApi } from '../services/api/server';

const useCategories = (type: 'tools' | 'ingredients') => {
  // TODO: wrap in try catch?
  const { data: categories } = useQuery(
    'categories',
    () => fetchCategories(type),
    {
      refetchOnWindowFocus: false,
    }
  );
  return categories ?? [];
};

const fetchCategories = async (type: 'tools' | 'ingredients') => {
  const response =
    type === 'ingredients'
      ? await ingredientsApi.retrieveAllCategories()
      : await toolsApi.retrieveAllCategories();
  return response.data as Array<CategoryState>;
};

export default useCategories;
