import { createSlice } from "@reduxjs/toolkit";

export interface RecipeState {
  id: number,
  name: string,
  time: string | null,
  nutrition: NutritionState,
  tools: Array<string>,
  ingredients: Array<IngredientState>,
  instructions: Array<string>
}

export interface IngredientState {
  id: number,
  name: string,
  amount: string | null
}

interface NutritionState {
  calories: number | null,
  protein: number | null,
  carbs: number | null,
  fat: number | null,
  fiber: number | null
}

const initialNutritionState = { calories: null, protein: null, carbs: null, fat: null, fiber: null } as NutritionState;
const initialState = { id: 0, name: '', tools: [], ingredients: [], time: null, instructions: [], nutrition: initialNutritionState } as RecipeState;

const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    updateRecipeName: (state, action) => {
      state.name = action.payload;
    },
    updateTime: (state, action) => {
      state.time = action.payload;
    },
    updateNutrition: (state, action) => {
      state.nutrition = {...state.nutrition, [action.payload.category]: action.payload.value};
    },
    updateTools: (state, action) => {
      state.tools = action.payload;
    },
    addIngredient: (state, action) => {
      state.ingredients = [...state.ingredients, { name: action.payload.name, amount: action.payload.amount }]
    },
    deleteIngredient: (state, action) => {
      state.ingredients = [
        ...state.ingredients.slice(0, action.payload),
        ...state.ingredients.slice(action.payload + 1)
      ];
    },
    updateInstructionStep: (state, action) => {
      state.instructions = [
        ...state.instructions.slice(0, action.payload.index),
        action.payload.text,
        ...state.instructions.slice(action.payload.index + 1)
      ];
    },
    addInstructionStep: (state) => {
      state.instructions = [...state.instructions, '']
    },
    deleteInstructionStep: (state, action) => {
      state.instructions = [
        ...state.instructions.slice(0, action.payload),
        ...state.instructions.slice(action.payload + 1)
      ]
    },
  },
});

export const { addIngredient, deleteIngredient, updateInstructionStep, addInstructionStep, deleteInstructionStep, 
  updateRecipeName, updateTime, updateNutrition, updateTools } = recipe.actions;
export default recipe.reducer;
