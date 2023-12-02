/* eslint-disable @typescript-eslint/no-unused-vars */
interface AdminState {
  recipe: RecipeState;
  recipeImageFile: File | null;
  ingredient: IngredientState;
  tool: ToolState;
}

interface FDCSearchResultsState {
  foods: Array<FDCFoodState>;
  totalPages: number;
  totalHits: number;
  isLoading: boolean;
}

interface FDCFoodState {
  fdcId: number;
  description: string;
  foodNutrients: Array<FDCNutrientState>;
}

interface FDCNutrientState {
  nutrientId: number;
  unitName: string;
  value: number;
}

interface AdminFormProps {
  submitBtnText: string;
  submitFn: (data: RecipeState, image: File | null) => void;
}
