import { createSlice } from '@reduxjs/toolkit';

const initialIngredientState = {
  ingredientId: null,
  ingredientName: '',
  category: { categoryId: null, categoryName: '' } as CategoryState,
  nutrientsFor100G: {},
  additionalMeasurements: {},
  mlFor100G: 0,
} as IngredientState;

const initialToolState = {
  toolId: null,
  toolName: '',
  category: { categoryId: null, categoryName: '' } as CategoryState,
} as ToolState;

const initialState = {
  ingredient: initialIngredientState,
  tool: initialToolState,
} as AdminState;

const admin = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    setIngredient: (state, action) => {
      if (!action.payload) state.ingredient = initialIngredientState;
      state.ingredient = { ...state.ingredient, ...action.payload };
    },
    setTool: (state, action) => {
      if (!action.payload) state.tool = initialToolState;
      state.tool = { ...state.tool, ...action.payload };
    },
  },
});

export const { setIngredient, setTool } = admin.actions;
export default admin.reducer;
