import { createSlice } from '@reduxjs/toolkit';

const adminRecipes = createSlice({
  name: 'adminRecipes',
  initialState: {},
  reducers: {
    createNewRecipeRequest: (state, action) => {},
    updateRecipeRequest: (state, action) => {},
  },
});

export const { createNewRecipeRequest, updateRecipeRequest } =
  adminRecipes.actions;
export default adminRecipes.reducer;
