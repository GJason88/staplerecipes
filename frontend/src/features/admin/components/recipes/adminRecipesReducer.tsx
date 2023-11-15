import { createSlice } from '@reduxjs/toolkit';

const adminRecipes = createSlice({
  name: 'adminRecipes',
  initialState: {},
  reducers: {
    createNewRecipeRequest: (state, action) => {},
  },
});

export const { createNewRecipeRequest } = adminRecipes.actions;
export default adminRecipes.reducer;
