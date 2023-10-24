import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipeId: null,
  recipeName: '',
  tools: [],
  ingredients: [],
  time: '',
  diet: '',
  instructions: [],
  nutrition: [],
  invalid: false,
} as RecipeState;

const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state = action.payload ? { ...state, ...action.payload } : initialState;
      console.log(state);
      return state;
    },
    setRecipeId: (state, action) => {
      // Gets recipe data from db when used.
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
      state.ingredients = [...state.ingredients, action.payload];
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
    editRecipeRequest: (state) => {},
    setInvalid: (state, action) => {
      state.invalid = action.payload;
    },
  },
});

export const {
  setRecipe,
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
  setInvalid,
} = recipe.actions;
export default recipe.reducer;
