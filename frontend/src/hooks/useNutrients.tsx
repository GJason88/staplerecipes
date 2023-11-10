import camelcaseKeys from 'camelcase-keys';
import { nutritionApi } from '../services/api/server';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';

const useNutrients = (byId?: boolean) => {
  const dispatch = useDispatch();
  const queryKey = byId ? 'nutrientsById' : 'nutrientsByLookup';
  const { data: nutrients } = useQuery(queryKey, () => fetchNutrients(byId), {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  return camelcaseKeys(nutrients ?? {}, { deep: true });
};

const fetchNutrients = async (byId = false) => {
  try {
    const response = await nutritionApi.getNutrients(byId);
    return response.data as { [key: string]: NutrientState };
  } catch (e) {
    let message = 'Failed to fetch categories';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    throw new Error(message);
  }
};

export default useNutrients;
