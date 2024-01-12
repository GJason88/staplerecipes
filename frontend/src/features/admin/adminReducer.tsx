/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit';

const initialRecipeState = {
  recipeId: '',
  recipeName: '',
  tools: [],
  ingredients: [],
  time: '',
  diet: '',
  servings: '',
  instructions: [],
  reviews: [],
} as RecipeState;

const initialIngredientState = {
  ingredientId: '',
  ingredientName: '',
  category: { categoryId: null, categoryName: '' } as CategoryState,
  nutrientsFor100G: {},
  additionalMeasurements: {},
  mlFor100G: 0,
} as IngredientState;

const initialToolState = {
  toolId: null,
  toolName: '',
  category: { categoryId: null, categoryName: '' } as CategoryState,
} as ToolState;

const initialFdcSearchData = {
  query: '',
  page: 1,
  foods: {},
  totalPages: 0,
  totalHits: 0,
} as FDCSearchResultsState;

const initialState = {
  recipe: initialRecipeState,
  ingredient: initialIngredientState,
  tool: initialToolState,
  fdcSearchData: initialFdcSearchData,
} as AdminState;

const admin = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    setRecipe: (state, action) => {
      if (!action.payload) state.recipe = initialRecipeState;
      state.recipe = { ...state.recipe, ...action.payload };
    },
    setIngredient: (state, action) => {
      if (!action.payload) state.ingredient = initialIngredientState;
      state.ingredient = { ...state.ingredient, ...action.payload };
    },
    setTool: (state, action) => {
      if (!action.payload) state.tool = initialToolState;
      state.tool = { ...state.tool, ...action.payload };
    },
    setFdcSearchData: (state, action) => {
      if (!action.payload) state.fdcSearchData = initialFdcSearchData;
      state.fdcSearchData = { ...state.fdcSearchData, ...action.payload };
    },
  },
});

export const { setRecipe, setIngredient, setTool, setFdcSearchData } = admin.actions;
export default admin.reducer;
