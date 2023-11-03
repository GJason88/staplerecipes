import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  curTabId: false,
} as ToolsPageState;

const tools = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    updateCurTabId: (state, action) => {
      state.curTabId = action.payload;
    },
  },
});

export const { updateCurTabId } = tools.actions;
export default tools.reducer;
