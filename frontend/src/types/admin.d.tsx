/* eslint-disable @typescript-eslint/no-unused-vars */
interface AdminState {
  recipe: RecipeState;
  recipeImageFile: File | null;
  ingredient: IngredientState;
  tool: ToolState;
  fdcSearchData: FDCSearchResultsState;
}

interface FDCSearchResultsState {
  query: string;
  page: number;
  foods: { [key: number]: Array<FDCFoodState> }; // page: food
  totalPages: number;
  totalHits: number;
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
