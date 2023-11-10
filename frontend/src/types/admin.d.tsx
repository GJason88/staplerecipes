/* eslint-disable @typescript-eslint/no-unused-vars */
interface AdminIngredientState {
  ingredient: IngredientState;
  fdcSearchResults: FDCSearchResultsState;
}

interface FDCSearchResultsState {
  foods: Array<FDCFoodState>;
  totalPages: number;
  totalHits: number;
  isLoading: boolean;
}

interface FDCFoodState {
  description: string;
  foodNutrients: Array<FDCNutrientState>;
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

interface FDCNutrientState {
  nutrientId: number;
  unitName: string;
  value: number;
}
