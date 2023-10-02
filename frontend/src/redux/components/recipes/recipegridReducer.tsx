import { createSlice } from '@reduxjs/toolkit';

interface RecipeGridState {
  recipes: Array<RecipeCardState>;
  isCreateDialog: boolean;
  createDialogErrorMessage: string;
}

export interface RecipeCardState {
  recipeId: number;
  recipeName: string;
}

const initialState = {
  recipes: [],
  isCreateDialog: false,
  createDialogErrorMessage: '',
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
    getAllRecipesRequest: (state) => {
      console.log('get all recipes requested');
    },
    getAllRecipesFailure: (state, action) => {
      // TODO: Handle error backend and frontend
      console.log('error', action);
    },
    createRecipeRequest: (state, action) => {},
  },
});

export const {
  updateCreateDialog,
  getAllRecipesRequest,
  createRecipeRequest,
  updateCreateDialogErrorMessage,
} = recipeGrid.actions;
export default recipeGrid.reducer;
