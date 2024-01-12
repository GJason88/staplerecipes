/* eslint-disable @typescript-eslint/no-unused-vars */
interface IngredientState {
  ingredientId: string;
  ingredientName: string;
  category: CategoryState;
  nutrientsFor100G: NutritionState;
  additionalMeasurements: { [key: string]: number };
  mlFor100G?: number;
  amount?: number;
  defaultMeasurement?: string;
}

type Measurement = 'g' | 'oz' | 'ml' | 'l' | 'tsp' | 'tbsp' | 'cup';
