import { createSlice } from "@reduxjs/toolkit";

export interface RecipeState {
  id: number,
  name: string,
  tools: Array<string>,
  ingredients: Array<IngredientState>,
  time: number,
  instructions: string,
  nutrition: NutritionState
}

interface IngredientState {
  name: string,
  amount: string
}

interface NutritionState {
  calories: number,
  protein: number,
  carbs: number,
  fat: number,
  fiber: number
}

const initialNutritionState = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 } as NutritionState;
const initialState = { id: 0, name: '', tools: [], ingredients: [], time: 0, instructions: '', nutrition: initialNutritionState } as RecipeState;

const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addIngredient(state, action) {
      state.ingredients = [...state.ingredients, { name: action.payload.name, amount: action.payload.amount }]
    },
    deleteIngredient(state, action) {
      state.ingredients = [
        ...state.ingredients.slice(0, action.payload),
        ...state.ingredients.slice(action.payload + 1)
      ];
    },
  },
});

export const { addIngredient, deleteIngredient } = recipe.actions;
export default recipe.reducer;
