import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  curTabId: false,
} as IngredientsPageState;

const ingredients = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    updateCurTabId: (state, action) => {
      state.curTabId = action.payload;
    },
  },
});

export const { updateCurTabId } = ingredients.actions;
export default ingredients.reducer;
