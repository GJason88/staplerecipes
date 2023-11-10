import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipeId: null,
  recipeName: '',
  tools: [],
  ingredients: [],
  time: '',
  diet: '',
  servings: '',
  instructions: [],
} as RecipeState;

const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state = action.payload ? { ...state, ...action.payload } : initialState;
      return state;
    },
    setRecipeId: (state, action) => {
      state.recipeId = action.payload;
    },
    setRecipeName: (state, action) => {
      state.recipeName = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setDiet: (state, action) => {
      state.diet = action.payload;
    },
    setServings: (state, action) => {
      state.servings = action.payload;
    },
    setTools: (state, action) => {
      state.tools = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },
  },
});

export const {
  setRecipe,
  setRecipeId,
  setRecipeName,
  setTime,
  setDiet,
  setServings,
  setTools,
  setIngredients,
  setInstructions,
} = recipe.actions;
export default recipe.reducer;
