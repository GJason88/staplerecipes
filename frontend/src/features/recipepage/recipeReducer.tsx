import { createSlice } from '@reduxjs/toolkit';

const initialNutrientState = {
  protein: 0,
  totalFat: 0,
  carbs: 0,
  calories: 0,
  totalSugars: 0,
  dietaryFiber: 0,
  sodium: 0,
  addedSugars: 0,
  cholesterol: 0,
  transFat: 0,
  saturatedFat: 0,
  calcium: 0,
  iron: 0,
  magnesium: 0,
  potassium: 0,
  zinc: 0,
  chromium: 0,
  copper: 0,
  iodine: 0,
  manganese: 0,
  molybdenum: 0,
  selenium: 0,
  vitaminA: 0,
  alphaCarotene: 0,
  betaCarotene: 0,
  vitaminE: 0,
  vitaminD: 0,
  vitaminC: 0,
  thiaminB1: 0,
  riboflavinB2: 0,
  niacinB3: 0,
  pantothenicAcidB5: 0,
  pyridoxineB6: 0,
  biotinB7: 0,
  folateB9: 0,
  cyanocobalaminB12: 0,
  choline: 0,
  vitaminK2: 0,
  vitaminK1: 0,
} as NutrientState;

const initialState = {
  recipeId: null,
  recipeName: '',
  tools: [],
  ingredients: [],
  time: '',
  diet: '',
  instructions: [],
  nutrition: initialNutrientState,
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
