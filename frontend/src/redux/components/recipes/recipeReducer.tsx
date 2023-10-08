import { createSlice } from '@reduxjs/toolkit';
import { ToolState } from '../tools/toolsReducer';
import { IngredientState } from '../ingredients/ingredientsReducer';

export interface RecipeState {
  recipeId: number | null;
  recipeName: string;
  time: string | null;
  nutrition: NutritionState | null;
  tools: Array<ToolState>;
  ingredients: Array<IngredientState>;
  instructions: Array<string>;
}

export interface NutritionState {
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
  fiber: number | null;
}

export interface UpdateRecipeParams {
  name: string;
  time: string | null;
  tools: Array<string>;
  ingredients: Array<IngredientState>;
  instructions: Array<string>;
}

const initialNutritionState = {
  calories: null,
  protein: null,
  carbs: null,
  fat: null,
  fiber: null,
} as NutritionState;

const initialState = {
  recipeId: null,
  recipeName: '',
  tools: [],
  ingredients: [],
  time: null,
  instructions: [],
  nutrition: initialNutritionState,
} as RecipeState;

const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    resetRecipe: (state) => {
      state = initialState;
    },
    setRecipeId: (state, action) => {
      state.recipeId = action.payload;
    },
    deleteRecipeRequest: (state, action) => {},
    updateRecipeName: (state, action) => {
      state.recipeName = action.payload;
    },
    updateTime: (state, action) => {
      state.time = action.payload;
    },
    updateNutrition: (state, action) => {
      state.nutrition = action.payload;
    },
    updateTools: (state, action) => {
      state.tools = action.payload;
    },
    addIngredient: (state, action) => {
      state.ingredients = [
        ...state.ingredients,
        action.payload,
      ];
    },
    deleteIngredient: (state, action) => {
      state.ingredients = [
        ...state.ingredients.slice(0, action.payload),
        ...state.ingredients.slice(action.payload + 1),
      ];
    },
    updateInstructionStep: (state, action) => {
      state.instructions = [
        ...state.instructions.slice(0, action.payload.index),
        action.payload.text,
        ...state.instructions.slice(action.payload.index + 1),
      ];
    },
    addInstructionStep: (state) => {
      state.instructions = [...state.instructions, ''];
    },
    deleteInstructionStep: (state, action) => {
      state.instructions = [
        ...state.instructions.slice(0, action.payload),
        ...state.instructions.slice(action.payload + 1),
      ];
    },
    editRecipeRequest: (state) => {}
  },
});

export const {
  resetRecipe,
  setRecipeId,
  deleteRecipeRequest,
  addIngredient,
  deleteIngredient,
  updateInstructionStep,
  addInstructionStep,
  deleteInstructionStep,
  updateRecipeName,
  updateTime,
  updateNutrition,
  updateTools,
  editRecipeRequest,
} = recipe.actions;
export default recipe.reducer;
