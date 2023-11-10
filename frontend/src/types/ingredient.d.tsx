/* eslint-disable @typescript-eslint/no-unused-vars */
interface IngredientsPageState {
  curTabId: number | false;
}

interface IngredientState {
  ingredientId: number | null;
  ingredientName: string;
  categoryId?: string | null;
  categoryName?: string;
  nutrientsFor100G: NutritionState;
  additionalMeasurements: { [key: string]: number };
  mlFor100G?: number;
  amount?: number;
  defaultMeasurement?: string;
}

enum Measurement {
  // weight
  Gram = 'g',
  Ounce = 'oz',
  // volume
  ML = 'ml',
  L = 'l',
  Tsp = 'tsp',
  Tbsp = 'tbsp',
  Cup = 'cup',
}
