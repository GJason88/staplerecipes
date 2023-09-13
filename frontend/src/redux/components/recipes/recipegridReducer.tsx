import { createSlice } from "@reduxjs/toolkit";

interface RecipeGridState {
  recipes: Array<RecipeCardState>,
  isCreateDialog: boolean,
}

export interface RecipeCardState {
  id: number,
  name: string,
}

const initialState = { recipes: [], isCreateDialog: false } as RecipeGridState;

const recipeGrid = createSlice({
  name: 'recipegrid',
  initialState,
  reducers: {
    updateCreateDialog: (state) => {
      state.isCreateDialog = !state.isCreateDialog;
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
    createRecipeSuccess: (state, action) => {
      console.log(action);
    },
    createRecipeFailure: (state, action) => {
      console.log('error', action);
    }
  },
});

export const { updateCreateDialog, getAllRecipesRequest, createRecipeRequest } = recipeGrid.actions;
export default recipeGrid.reducer;
