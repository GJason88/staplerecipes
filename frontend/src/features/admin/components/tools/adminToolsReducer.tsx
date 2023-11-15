import { createSlice } from '@reduxjs/toolkit';

const initialToolState = {
  toolId: null,
  toolName: '',
  category: { categoryId: null, categoryName: '' } as CategoryState,
} as ToolState;

const initialState = { tool: initialToolState } as AdminToolState;

const adminTools = createSlice({
  name: 'adminTools',
  initialState: initialState,
  reducers: {
    setTool: (state, action) => {
      if (!action.payload) state.tool = initialToolState;
      state.tool = { ...state.tool, ...action.payload };
    },
    createNewToolRequest: (state, action) => {},
  },
});

export const { setTool, createNewToolRequest } = adminTools.actions;
export default adminTools.reducer;
