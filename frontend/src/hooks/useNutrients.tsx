import camelcaseKeys from 'camelcase-keys';
import { nutritionApi } from '../services/api/server';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import axios from 'axios';

const useNutrients = (byId?: boolean) => {
  const dispatch = useDispatch();
  try {
    const queryKey = byId ? 'nutrientsById' : 'nutrientsByLookup';
    const { data: nutrients } = useQuery(queryKey, () => fetchNutrients(byId), {
      refetchOnWindowFocus: false,
    });
    return nutrients ? camelcaseKeys(nutrients, { deep: true }) : undefined;
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

const fetchNutrients = async (byId = false) => {
  const response = await nutritionApi.getNutrients(byId);
  return response.data as { [key: string]: NutrientState };
};

export default useNutrients;
