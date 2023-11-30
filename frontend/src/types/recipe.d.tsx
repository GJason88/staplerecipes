/* eslint-disable @typescript-eslint/no-unused-vars */
interface RecipeState {
  recipeId: string;
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
  displayName: string;
  date: number; // epoch timestamp in seconds
  rating: number; // between 1 and 5
  reviewText: string;
}
