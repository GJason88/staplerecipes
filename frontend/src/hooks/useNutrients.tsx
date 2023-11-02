import camelcaseKeys from 'camelcase-keys';
import { nutritionApi } from '../services/api/server';
import { useQuery } from 'react-query';

const useNutrients = (byId?: boolean) => {
  const queryKey = byId ? 'nutrientsById' : 'nutrientsByLookup';
  const { data } = useQuery(queryKey, () => fetchNutrients(byId), {
    refetchOnWindowFocus: false,
  });
  const nutrients: { [key: string]: NutrientState } = camelcaseKeys(
    data ?? {},
    { deep: true }
  );
  return nutrients;
};

const fetchNutrients = async (byId = false) => {
  const response: { data: { data: { [key: string]: NutrientState } } } =
    await nutritionApi.getNutrients(byId);
  return response.data;
};

export default useNutrients;
