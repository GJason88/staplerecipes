import { createSlice } from '@reduxjs/toolkit';

const initialNutritionState = {
  protein: { amount: 0, unit: 'g' },
  totalFat: { amount: 0, unit: 'g' },
  carbs: { amount: 0, unit: 'g' },
  calories: { amount: 0, unit: 'calories' },
  totalSugars: { amount: 0, unit: 'g' },
  dietaryFiber: { amount: 0, unit: 'g' },
  sodium: { amount: 0, unit: 'mg' },
  addedSugars: { amount: 0, unit: 'g' },
  cholesterol: { amount: 0, unit: 'mg' },
  transFat: { amount: 0, unit: 'g' },
  saturatedFat: { amount: 0, unit: 'g' },
  calcium: { amount: 0, unit: 'mg' },
  iron: { amount: 0, unit: 'mg' },
  magnesium: { amount: 0, unit: 'mg' },
  potassium: { amount: 0, unit: 'mg' },
  zinc: { amount: 0, unit: 'mg' },
  chromium: { amount: 0, unit: 'mg' },
  copper: { amount: 0, unit: 'mg' },
  iodine: { amount: 0, unit: 'mg' },
  manganese: { amount: 0, unit: 'mg' },
  molybdenum: { amount: 0, unit: 'mg' },
  selenium: { amount: 0, unit: 'mg' },
  vitaminA: { amount: 0, unit: 'mcg' },
  alphaCarotene: { amount: 0, unit: 'mcg' },
  betaCarotene: { amount: 0, unit: 'mcg' },
  vitaminE: { amount: 0, unit: 'mg' },
  vitaminD: { amount: 0, unit: 'mcg' },
  vitaminC: { amount: 0, unit: 'mg' },
  thiaminB1: { amount: 0, unit: 'mg' },
  riboflavinB2: { amount: 0, unit: 'mg' },
  niacinB3: { amount: 0, unit: 'mg' },
  pantothenicAcidB5: { amount: 0, unit: 'mg' },
  pyridoxineB6: { amount: 0, unit: 'mg' },
  biotinB7: { amount: 0, unit: 'mcg' },
  folateB9: { amount: 0, unit: 'mcg' },
  cyanocobalaminB12: { amount: 0, unit: 'mcg' },
  choline: { amount: 0, unit: 'mg' },
  vitaminK2: { amount: 0, unit: 'mcg' },
  vitaminK1: { amount: 0, unit: 'mcg' },
} as NutritionState;

const initialState = {
  recipeId: null,
  recipeName: '',
  tools: [],
  ingredients: [],
  time: '',
  diet: '',
  instructions: [],
  nutrition: initialNutritionState,
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
