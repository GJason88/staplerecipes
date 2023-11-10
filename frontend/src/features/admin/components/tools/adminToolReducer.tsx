import { createSlice } from '@reduxjs/toolkit';

const adminTools = createSlice({
  name: 'adminTools',
  initialState: {},
  reducers: {
    createNewToolRequest: (state, action) => {},
  },
});

export const { createNewToolRequest } = adminTools.actions;
export default adminTools.reducer;
