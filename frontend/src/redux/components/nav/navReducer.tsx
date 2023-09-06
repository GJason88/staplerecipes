import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  isMobile: boolean,
  selectedIndex: number,
  isSearchSelected: boolean,
}

const initialState = { isMobile: false, selectedIndex: 0, isSearchSelected: false } as NavState;

const nav = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    updateIsMobile: (state) => {
      state.isMobile = !state.isMobile;
    },
    updateSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
    updateIsSearchSelected: (state, action) => {
      state.isSearchSelected = action.payload;
    },
  },
});

export const { updateIsMobile, updateSelectedIndex, updateIsSearchSelected } = nav.actions;
export default nav.reducer;
