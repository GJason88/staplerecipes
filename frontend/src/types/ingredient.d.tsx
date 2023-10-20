/* eslint-disable @typescript-eslint/no-unused-vars */
interface IngredientsPageState {
  ingredients: Array<IngredientState>;
  categories: Array<CategoryState>;
  isCreateIngrDialog: boolean;
  isCreateCategoryDialog: boolean;
  createErrorMessage: string;
  curTabId?: number | false;
}

interface IngredientState {
  ingredientId: number | null;
  ingredientName: string;
  categoryName: string;
  nutrition: NutrientState;
  additionalMeasurements: Array<MeasurementState>;
  mlFor100g: number; // ml per 100g (0 if no volume measurements)
  amount?: number;
  defaultMeasurement?: MeasurementState;
}

interface MeasurementState {
  measurementName: string;
  grams: number;
}
