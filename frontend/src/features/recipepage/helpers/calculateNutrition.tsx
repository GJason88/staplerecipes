/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { nutrientIdToAttr } from '../../../data/mappings';
import { measurements } from '../../../data/measurements';

export const calculateNutrition = (ingredients: Array<IngredientState>) => {
  const recipeNutrition = {};
  for (const ingredient of ingredients) {
    const nutrients = ingredient.nutrientsFor100G;
    const mtGrams = getMeasurementGrams(
      ingredient.defaultMeasurement,
      ingredient.additionalMeasurements,
      ingredient.mlFor100G
    );
    const totalGrams = ingredient.amount * mtGrams;
    combineNutrients(nutrients, totalGrams, recipeNutrition);
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
  return isVolume(mt) ? (measurements[mt] / mlFor100G) * 100 : measurements[mt];
};

const isVolume = (mt: Measurement) =>
  ['ml', 'l', 'cup', 'tsp', 'tbsp'].includes(mt);

const combineNutrients = (
  nutrients: Array<NutrientState>,
  totalGrams: number,
  recipeNutrition: { [key: string]: NutrientState }
) => {
  for (const nutrient of nutrients) {
    const attr = nutrientIdToAttr[nutrient.nutrientId.toString()];
    const nutrientAmt = Math.round((totalGrams / 100) * nutrient.amount);
    if (!(attr in recipeNutrition)) {
      recipeNutrition[attr] = { ...nutrient, amount: nutrientAmt };
    } else {
      recipeNutrition[attr].amount += nutrientAmt;
    }
  }
};
