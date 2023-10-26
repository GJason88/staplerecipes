import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fdcIngredients: [],
} as AdminState;

const admin = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    searchIngredientsRequest: (state, action) => {},
    setFDCIngredients: (state, action) => {
      const foods = action.payload;
      state.fdcIngredients = foods.map((food) => ({
        fdcId: food.fdcId,
        description: food.description,
      }));
      console.log(state.fdcIngredients);
    },
  },
});

export const { searchIngredientsRequest } = admin.actions;
export default admin.reducer;
