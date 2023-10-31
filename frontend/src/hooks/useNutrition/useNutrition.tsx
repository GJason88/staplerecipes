/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useSelector } from 'react-redux';
import { IRootState } from '../..';
import { measurements } from '../../data/measurements';
import { initialNutritionState } from './initialNutritionState';

export default function useNutrition() {
  const ingredients = useSelector<IRootState, Array<RecipeIngredientState>>(
    (state) => state.recipe.ingredients
  );
  const recipeNutrition = structuredClone(initialNutritionState);
  const calculateNutrition = (ingredients: Array<RecipeIngredientState>) => {
    for (const recipeIngredient of ingredients) {
      const nutrients = recipeIngredient.ingredient.nutrientsFor100G;
      const mtGrams = getMeasurementGrams(
        recipeIngredient.defaultMeasurement,
        recipeIngredient.ingredient.additionalMeasurements,
        recipeIngredient.ingredient.mlFor100G
      );
      const totalGrams = recipeIngredient.amount * mtGrams;
      combineNutrients(nutrients, totalGrams);
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
      ? (measurements[mt] / mlFor100G) * 100
      : measurements[mt];
  };

  const isVolume = (mt: Measurement) =>
    ['ml', 'l', 'cup', 'tsp', 'tbsp'].includes(mt);

  const combineNutrients = (nutrients: NutritionState, totalGrams: number) => {
    Object.entries(nutrients).forEach(([nutrientName, nutrientInfo]) => {
      const nutrientAmt = Math.round((totalGrams / 100) * nutrientInfo.amount);
      recipeNutrition[nutrientName as NutritionKey].amount += nutrientAmt;
    });
  };

  return calculateNutrition(ingredients);
}
