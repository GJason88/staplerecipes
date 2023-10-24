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
  nutrientsFor100G: Array<NutrientState>;
  additionalMeasurements: Array<{ [key: string]: number }>;
  mlFor100G: number; // ml per 100g (0 if no volume measurements)
  amount: number;
  defaultMeasurement: string;
}
