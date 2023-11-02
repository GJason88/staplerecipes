import { nutritionApi } from '.';

export const fetchNutrients = async (byId = false) => {
  const response: { data: { data: { [key: string]: NutrientState } } } =
    await nutritionApi.getNutrients(byId);
  return response.data;
};
