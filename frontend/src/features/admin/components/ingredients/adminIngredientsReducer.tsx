import { createSlice } from '@reduxjs/toolkit';

const initialIngredientState = {
  ingredientId: null,
  ingredientName: '',
  category: { categoryId: null, categoryName: '' },
  nutrientsFor100G: {},
  additionalMeasurements: {},
  mlFor100G: 0,
} as IngredientState;

const initialState = {
  ingredient: initialIngredientState,
  fdcSearchResults: {
    foods: [],
    totalPages: 1,
    totalHits: 0,
    isLoading: false,
  },
} as AdminIngredientState;

const adminIngredients = createSlice({
  name: 'adminIngredients',
  initialState,
  reducers: {
    setFDCSearchResults: (state, action) => {
      state.fdcSearchResults = action.payload;
      state.fdcSearchResults.isLoading = false;
    },
    setIngredient: (state, action) => {
      if (!action.payload) state.ingredient = initialIngredientState;
      state.ingredient = { ...state.ingredient, ...action.payload };
    },
    FDCSearchRequest: (state, action) => {
      state.fdcSearchResults.isLoading = true;
    },
    createNewIngredientRequest: (state, action) => {},
    updateIngredientRequest: (state, action) => {},
  },
});

export const {
  setIngredient,
  FDCSearchRequest,
  createNewIngredientRequest,
  updateIngredientRequest,
} = adminIngredients.actions;
export default adminIngredients.reducer;
