import { createSlice } from "@reduxjs/toolkit";

interface RecipeGridState {
  recipes: Array<string>,
  isCreateDialog: boolean,
}

const initialState = { recipes: [], isCreateDialog: false } as RecipeGridState;

const recipeGrid = createSlice({
  name: 'recipegrid',
  initialState,
  reducers: {
    updateCreateDialog: (state) => {
      state.isCreateDialog = !state.isCreateDialog;
    },
  },
});

export const { updateCreateDialog } = recipeGrid.actions;
export default recipeGrid.reducer;
