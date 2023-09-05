import { createSlice } from '@reduxjs/toolkit';

interface TopAppBarState {
  isSearchSelected: boolean,
}

const initialState = { isSearchSelected: false } as TopAppBarState;

const topappbar = createSlice({
  name: 'topappbar',
  initialState,
  reducers: {
    updateIsSearchSelected: (state, action) => {
      state.isSearchSelected = action.payload;
    },
  },
});

export const { updateIsSearchSelected } = topappbar.actions;
export default topappbar.reducer;
