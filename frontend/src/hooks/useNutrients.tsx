import camelcaseKeys from 'camelcase-keys';
import { nutritionApi } from '../services/api/server';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import catchError from './helpers/functions/catchError';

const useNutrients = (byId?: boolean) => {
  const dispatch = useDispatch();
  const queryKey = byId ? 'nutrientsById' : 'nutrientsByLookup';
  const { data: nutrients } = useQuery(queryKey, () => fetchNutrients(byId), {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e) =>
      dispatch(setResult({ message: catchError(e), severity: 'error' })),
  });
  return camelcaseKeys(nutrients ?? {}, { deep: true });
};

const fetchNutrients = async (byId = false) => {
  try {
    const response = await nutritionApi.getNutrients(byId);
    return response.data as { [key: string]: NutrientState };
  } catch (e) {
    Promise.reject(new Error(catchError(e)));
  }
};

export default useNutrients;
