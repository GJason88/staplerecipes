import { createSlice } from '@reduxjs/toolkit';
import { NutritionState } from '../recipes/recipeReducer';
import { CategoryState } from '../tools/toolsReducer';

export interface IngredientsPageState {
  ingredients: Array<IngredientState>;
  categories: Array<CategoryState>;
  isCreateIngrDialog: boolean;
  isCreateCategoryDialog: boolean;
  createErrorMessage: string;
  curTabId?: number | false;
}

export interface IngredientState {
  ingredientId: number | null;
  ingredientName: string;
  categoryId: number | null;
  nutrition: NutritionState;
  amount?: number;
}

const initialState = {
  ingredients: [],
  categories: [],
  isCreateIngrDialog: false,
  isCreateCategoryDialog: false,
  createErrorMessage: '',
  curTabId: false,
} as IngredientsPageState;

const ingredients = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredientRequest: (state, action) => {
      state.isCreateIngrDialog = false;
    },
    addCategoryRequest: (state, action) => {
      state.isCreateCategoryDialog = false;
    },
    removeIngredientRequest: (state, action) => {},
    removeCategoryRequest: (state, action) => {},
    getIngredientsRequest: (state) => {},
    getCategoriesRequest: (state) => {},
    updateIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    updateCategories: (state, action) => {
      state.categories = action.payload;
      if (
        state.categories.length != 0 &&
        (!state.curTabId ||
          !state.categories.some((cat) => cat.categoryId === state.curTabId))
      ) {
        state.curTabId = state.categories[0].categoryId;
      }
    },
    updateCreateIngrDialog: (state, action) => {
      state.isCreateIngrDialog = action.payload;
      state.createErrorMessage = '';
    },
    updateCreateCategoryDialog: (state, action) => {
      state.isCreateCategoryDialog = action.payload;
      state.createErrorMessage = '';
    },
    updateCreateErrorMessage: (state, action) => {
      state.createErrorMessage = action.payload;
    },
    updateCurTabId: (state, action) => {
      state.curTabId = action.payload;
    },
  },
});

export const {
  addIngredientRequest,
  addCategoryRequest,
  removeIngredientRequest,
  removeCategoryRequest,
  getIngredientsRequest,
  getCategoriesRequest,
  updateCreateIngrDialog,
  updateCreateCategoryDialog,
  updateCreateErrorMessage,
  updateCurTabId
} = ingredients.actions;
export default ingredients.reducer;
