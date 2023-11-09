import camelcaseKeys from 'camelcase-keys';
import { nutritionApi } from '../services/api/server';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';

const useNutrients = (byId?: boolean) => {
  const queryKey = byId ? 'nutrientsById' : 'nutrientsByLookup';
  const { data: nutrients } = useQuery(queryKey, () => fetchNutrients(byId), {
    refetchOnWindowFocus: false,
  });
  return camelcaseKeys(nutrients ?? {}, { deep: true });
};

const fetchNutrients = async (byId = false) => {
  const dispatch = useDispatch();
  try {
    const response = await nutritionApi.getNutrients(byId);
    return response.data as { [key: string]: NutrientState };
  } catch (e) {
    let message = 'Failed to fetch nutrients';
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
};

export default useNutrients;
