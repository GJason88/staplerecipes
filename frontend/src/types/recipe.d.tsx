/* eslint-disable @typescript-eslint/no-unused-vars */
interface RecipeState {
  recipeId: number | null;
  recipeName: string;
  time: string;
  diet: string;
  instructions: Array<string>;
  tools: Array<ToolState>;
  ingredients: Array<IngredientState>;
  nutrition: NutrientState | null;
  invalid: boolean;
}

interface UpdateRecipeState {
  recipeInfo?: {
    recipeName?: string,
    time?: string,
    diet?: string,
    instructions?: Array<string>,
  };
  addTools?: Array<number>;
  removeTools?: Array<number>;
  addIngredients?: Array<number>;
  removeIngredients?: Array<number>;
}
