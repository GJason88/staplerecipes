import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  isCreateDialog: false,
  createDialogErrorMessage: '',
  redirect: false,
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
    updateRedirect: (state, action) => {
      state.redirect = action.payload;
    }
  },
});

export const {
  updateCreateDialog,
  getAllRecipesRequest,
  updateCreateDialogErrorMessage,
  updateRedirect,
} = recipeGrid.actions;
export default recipeGrid.reducer;
