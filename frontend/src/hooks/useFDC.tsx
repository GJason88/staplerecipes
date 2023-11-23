import { useQuery } from 'react-query';
import { fdcApi } from '../services/api/fdc';
import catchError from './helpers/functions/catchError';
import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';

const useFDC = ({ query, page }: { query: string; page: number }) => {
  const dispatch = useDispatch();
  const { data: fdcResults, isLoading } = useQuery(
    ['fdc', query, page],
    () => fetchFDC(query, page),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (e) =>
        dispatch(setResult({ message: catchError(e), severity: 'error' })),
    }
  );
  const foods =
    fdcResults?.foods.map((food) => ({
      id: food.fdcId,
      description: food.description,
      foodNutrients: food.foodNutrients,
    })) ?? [];

  return {
    fdcSearchResults: {
      foods,
      totalPages: fdcResults?.totalPages ?? 0,
      totalHits: fdcResults?.totalHits ?? 0,
    },
    isLoading,
  };
};

const fetchFDC = async (query: string, page: number) => {
  try {
    if (!query) return;
    const response = await fdcApi.searchFoods(query, page);
    return response.data as FDCSearchResultsState;
  } catch (e) {
    Promise.reject(new Error(catchError(e)));
  }
};

export default useFDC;
