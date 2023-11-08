/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { measurementConversions } from '../../../data/measurements';

export const calculateNutrition = (ingredients: Array<IngredientState>) => {
  const recipeNutrition: NutritionState = {};
  for (const recipeIngredient of ingredients) {
    const ingredientNutrition = recipeIngredient.nutrientsFor100G ?? {};
    const mtGrams = getMeasurementGrams(
      recipeIngredient.defaultMeasurement as Measurement,
      recipeIngredient.additionalMeasurements ?? {},
      recipeIngredient.mlFor100G
    );
    const totalGrams = recipeIngredient.amount as number * mtGrams;
    Object.entries(ingredientNutrition).forEach(([nutrientId, amount]) => {
      if (!(nutrientId in recipeNutrition)) recipeNutrition[nutrientId] = 0;
      recipeNutrition[nutrientId] += Math.round((totalGrams / 100) * amount);
    });
  }
  return recipeNutrition;
};

const getMeasurementGrams = (
  mt: Measurement,
  adMts: { [key: string]: number },
  mlFor100G: number | undefined
) => {
  if (adMts && mt in adMts) {
    return adMts[mt];
  }
  return isVolume(mt) && mlFor100G
    ? (measurementConversions[mt] / mlFor100G) * 100
    : measurementConversions[mt];
};

const isVolume = (mt: Measurement) =>
  ['ml', 'l', 'cup', 'tsp', 'tbsp'].includes(mt);
