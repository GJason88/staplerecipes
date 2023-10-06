import { createSlice } from '@reduxjs/toolkit';

export interface RecipeGridState {
  recipes: Array<RecipeCardState>;
  isCreateDialog: boolean;
  createDialogErrorMessage: string;
  isRedirect: boolean;
}

export interface RecipeCardState {
  recipeId: number;
  recipeName: string;
}

const initialState = {
  recipes: [],
  isCreateDialog: false,
  createDialogErrorMessage: '',
  isRedirect: false,
} as RecipeGridState;

const recipeGrid = createSlice({
  name: 'recipegrid',
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    updateCreateDialog: (state, action) => {
      state.isCreateDialog = action.payload;
      state.createDialogErrorMessage = '';
    },
    updateCreateDialogErrorMessage: (state, action) => {
      state.createDialogErrorMessage = action.payload;
    },
    getAllRecipesRequest: (state) => {},
    getAllRecipesFailure: (state, action) => {
      // TODO: Handle error backend and frontend
      console.log('error', action);
    },
    createRecipeRequest: (state, action) => {
      state.isCreateDialog = false;
    },
    updateRedirect: (state, action) => {
      state.isRedirect = action.payload;
    }
  },
});

export const {
  updateCreateDialog,
  getAllRecipesRequest,
  createRecipeRequest,
  updateCreateDialogErrorMessage,
  updateRedirect,
} = recipeGrid.actions;
export default recipeGrid.reducer;
