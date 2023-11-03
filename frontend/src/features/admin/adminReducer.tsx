import { createSlice } from '@reduxjs/toolkit';

const initialNewIngredientState = {
  ingredientName: '',
  categoryId: null,
  nutrientsFor100G: {},
  additionalMeasurements: {},
  mlFor100G: 0
} as NewIngredientState;

const initialState = {
  newIngredient: initialNewIngredientState,
  foods: [],
  totalPages: 1,
  totalHits: 0,
  isLoading: false,
} as AdminState;

const admin = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    searchFoodsRequest: (state, action) => {
      state.isLoading = true;
    },
    setSearchResult: (state, action) => {
      const foods = action.payload.foods;
      state.foods = foods.map((food) => ({
        description: food.description,
        foodNutrients: food.foodNutrients,
      }));
      state.totalPages = action.payload.totalPages;
      state.totalHits = action.payload.totalHits;
      state.isLoading = false;
    },
    setNewIngredient: (state, action) => {
      state.newIngredient = { ...state.newIngredient, ...action.payload };
    },
    addMeasurement: (state, action) => {
      state.newIngredient.additionalMeasurements = {
        ...state.newIngredient.additionalMeasurements,
        ...action.payload,
      };
    },
    removeMeasurement: (state, action) => {
      const measurements = {...state.newIngredient.additionalMeasurements};
      delete measurements[action.payload];
      state.newIngredient.additionalMeasurements = measurements;
    },
    createNewIngredientRequest: (state, action) => {}
  },
});

export const { searchFoodsRequest, setNewIngredient, addMeasurement, removeMeasurement, createNewIngredientRequest } = admin.actions;
export default admin.reducer;
