import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  isMobile: boolean,
  path: string,
  isSearchSelected: boolean,
}

const initialState = { isMobile: false, path: '/', isSearchSelected: false } as NavState;

const nav = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    updateIsMobile: (state) => {
      state.isMobile = !state.isMobile;
    },
    updatePath: (state, action) => {
      state.path = action.payload;
    },
    updateIsSearchSelected: (state, action) => {
      state.isSearchSelected = action.payload;
    },
  },
});

export const { updateIsMobile, updatePath, updateIsSearchSelected } = nav.actions;
export default nav.reducer;
