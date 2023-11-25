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
  reviews: Array<ReviewState>;
}

interface ReviewState {
  uid?: string; // only for current user if logged in
  date: Date;
  displayName: string;
  rating: number; // between 1 and 5
  reviewText: string;
}
