/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {} as ServiceState;

const service = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setResult(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setResult } = service.actions;
export default service.reducer;
