/* eslint-disable @typescript-eslint/no-unused-vars */
interface RecipeState {
  recipeId: number | null;
  recipeName: string;
  time: string;
  diet: string;
  servings: string;
  instructions: Array<string>;
  tools: Array<ToolState>;
  ingredients: Array<IngredientState>;
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

interface RecipeGridState {
  recipes: Array<RecipeCardState>;
  isCreateDialog: boolean;
  createDialogErrorMessage: string;
  redirect: string | false;
}

interface RecipeCardState {
  recipeId: number;
  recipeName: string;
}
