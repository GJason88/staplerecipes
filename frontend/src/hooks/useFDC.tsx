import { useQuery } from 'react-query';
import { fdcApi } from '../services/api/fdc';
import useErrorHandler from './useErrorHandler';
import catchError from './helpers/catchError';

const useFDC = ({ query, page }: { query: string; page: number }) => {
  const errorHandler = useErrorHandler();
  const { data: fdcResults, isLoading } = useQuery(
    ['fdc', query, page],
    () => fetchFDC(query, page),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: errorHandler,
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
    throw new Error(catchError(e));
  }
};

export default useFDC;
