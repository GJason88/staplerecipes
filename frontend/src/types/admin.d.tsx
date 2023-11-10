/* eslint-disable @typescript-eslint/no-unused-vars */
interface AdminState {
  foods: Array<FDCFoodState>;
  newIngredient: NewIngredientState;
  totalPages: number;
  totalHits: number;
  isLoading: boolean;
}

interface NewIngredientState {
  categoryId: number | null;
  ingredientName: string;
  nutrientsFor100G: NutritionState;
  additionalMeasurements: { [key: string]: number };
  mlFor100G: number;
}

interface NewToolState {
  categoryId: number | null;
  toolName: string;
}

interface FDCFoodState {
  description: string;
  foodNutrients: Array<FDCNutrientState>;
}

interface FDCNutrientState {
  nutrientId: number;
  unitName: string;
  value: number;
}
