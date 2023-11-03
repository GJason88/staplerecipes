import camelcaseKeys from 'camelcase-keys';
import { nutritionApi } from '../services/api/server';
import { useQuery } from 'react-query';

const useNutrients = (byId?: boolean) => {
  const queryKey = byId ? 'nutrientsById' : 'nutrientsByLookup';
  const { data: nutrients } = useQuery(queryKey, () => fetchNutrients(byId), {
    refetchOnWindowFocus: false,
  });
  return camelcaseKeys(nutrients ?? {}, { deep: true });
};

const fetchNutrients = async (byId = false) => {
  const response = await nutritionApi.getNutrients(byId);
  return response.data as { [key: string]: NutrientState };
};

export default useNutrients;
