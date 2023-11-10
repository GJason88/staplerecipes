import { createSlice } from '@reduxjs/toolkit';

const initialIngredientState = {
  ingredientId: null,
  ingredientName: '',
  categoryId: null,
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
    resetIngredient: (state) => {
      state.ingredient = initialIngredientState;
    },
    setFDCSearchResults: (state, action) => {
      state.fdcSearchResults = action.payload;
      state.fdcSearchResults.isLoading = false;
    },
    setIngredient: (state, action) => {
      state.ingredient = { ...state.ingredient, ...action.payload };
    },
    FDCSearchRequest: (state, action) => {
      state.fdcSearchResults.isLoading = true;
    },
    createNewIngredientRequest: (state, action) => {},
  },
});

export const {
  resetIngredient,
  setIngredient,
  FDCSearchRequest,
  createNewIngredientRequest,
} = adminIngredients.actions;
export default adminIngredients.reducer;
