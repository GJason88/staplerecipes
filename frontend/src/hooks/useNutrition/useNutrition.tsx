/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useSelector } from 'react-redux';
import { IRootState } from '../..';
import { nutrientIdToKey } from '../../data/mappings';
import { measurements } from '../../data/measurements';
import { initialNutritionState } from './initialNutritionState';

export default function useNutrition() {
  const ingredients = useSelector<IRootState, Array<IngredientState>>(
    (state) => state.recipe.ingredients
  );
  const recipeNutrition = structuredClone(initialNutritionState);
  const calculateNutrition = (ingredients: Array<IngredientState>) => {
    for (const ingredient of ingredients) {
      const nutrients = ingredient.nutrientsFor100G;
      const mtGrams = getMeasurementGrams(
        ingredient.defaultMeasurement,
        ingredient.additionalMeasurements,
        ingredient.mlFor100G
      );
      const totalGrams = ingredient.amount * mtGrams;
      combineNutrients(nutrients, totalGrams);
    }
    return recipeNutrition;
  };

  const getMeasurementGrams = (
    mt: Measurement,
    adMts: { [key: string]: number },
    mlFor100G: number
  ) => {
    if (adMts && mt in adMts) {
      return adMts[mt];
    }
    return isVolume(mt)
      ? (measurements[mt] / mlFor100G) * 100
      : measurements[mt];
  };

  const isVolume = (mt: Measurement) =>
    ['ml', 'l', 'cup', 'tsp', 'tbsp'].includes(mt);

  const combineNutrients = (
    nutrients: Array<NutrientState>,
    totalGrams: number
  ) => {
    for (const nutrient of nutrients) {
      const attr = nutrientIdToKey[nutrient.nutrientId.toString()];
      const nutrientAmt = Math.round((totalGrams / 100) * nutrient.amount);
      recipeNutrition[attr].amount += nutrientAmt;
    }
  };

  return calculateNutrition(ingredients);
}
