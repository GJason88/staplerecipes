import { createSlice } from "@reduxjs/toolkit";

export interface RecipeState {
  id: number,
  name: string,
  time: number,
  nutrition: NutritionState,
  tools: Array<string>,
  ingredients: Array<IngredientState>,
  instructions: Array<string>,
}

export interface IngredientState {
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
const initialState = { id: 0, name: '', tools: [], ingredients: [], time: 0, instructions: [], nutrition: initialNutritionState } as RecipeState;

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
    createRecipeFetch: (state) => {
      console.log('fetch requested');
    },
    getRecipesSuccess: (state, action) => {
      console.log(action.recipe.data);
    },
    getRecipesFailure: (state, action) => {
      console.log('error', action)
    }
  },
});

export const { addIngredient, deleteIngredient, updateInstructionStep, addInstructionStep, deleteInstructionStep, 
  updateRecipeName, updateTime, updateNutrition, updateTools, getRecipesFetch } = recipe.actions;
export default recipe.reducer;
