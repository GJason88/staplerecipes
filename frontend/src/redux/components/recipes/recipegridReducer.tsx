import { createSlice } from "@reduxjs/toolkit";

interface RecipeGridState {
  recipes: Array<RecipeCardState>,
  isCreateDialog: boolean,
  createDialogErrorMessage: string,
}

export interface RecipeCardState {
  id: string,
  name: string,
}

const initialState = { recipes: [], isCreateDialog: false, createDialogErrorMessage: '' } as RecipeGridState;

const recipeGrid = createSlice({
  name: 'recipegrid',
  initialState,
  reducers: {
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
    getAllRecipesSuccess: (state, action) => {
      state.recipes = action.payload;
    },
    getAllRecipesFailure: (state, action) => {
      console.log('error', action);
    },
    createRecipeRequest: (state, action) => {
      console.log('create recipe requested');
    },
  },
});

export const { updateCreateDialog, getAllRecipesRequest, createRecipeRequest, updateCreateDialogErrorMessage } = recipeGrid.actions;
export default recipeGrid.reducer;
