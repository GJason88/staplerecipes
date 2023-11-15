import { createSlice } from '@reduxjs/toolkit';

const initialIngredientState = {
  ingredientId: null,
  ingredientName: '',
  category: { categoryId: null, categoryName: '' } as CategoryState,
  nutrientsFor100G: {},
  additionalMeasurements: {},
  mlFor100G: 0,
} as IngredientState;

const initialState = {
  ingredient: initialIngredientState,
} as AdminIngredientState;

const adminIngredients = createSlice({
  name: 'adminIngredients',
  initialState,
  reducers: {
    setIngredient: (state, action) => {
      if (!action.payload) state.ingredient = initialIngredientState;
      state.ingredient = { ...state.ingredient, ...action.payload };
    },
    createNewIngredientRequest: (state, action) => {},
  },
});

export const { setIngredient, createNewIngredientRequest } =
  adminIngredients.actions;
export default adminIngredients.reducer;
