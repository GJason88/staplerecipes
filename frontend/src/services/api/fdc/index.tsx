/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { get, post } from './base';

export const fdcApi = {
  searchFoods: (query: string, pageNumber: number) =>
    post(
      '/foods/search',
      {
        query: query,
        pageSize: 50,
        pageNumber: pageNumber,
        dataType: ['Foundation', 'SR Legacy'],
        sortBy: 'dataType.keyword',
      },
      {
        params: { api_key: import.meta.env.VITE_REACT_APP_FDC_API_KEY },
      }
    ),
  searchFood: (fdcId: number) =>
    get(`/food/${fdcId}`, {
      params: { api_key: import.meta.env.VITE_REACT_APP_FDC_API_KEY },
    }),
};
