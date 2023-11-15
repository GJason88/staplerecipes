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

interface FDCNutrientState {
  nutrientId: number;
  unitName: string;
  value: number;
}

interface AdminToolState {
  tool: ToolState;
}

interface AdminFormProps {
  submitBtnText: string;
  submitFn: (data: any) => void;
}
