import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  isMobile: boolean;
  path: string;
  isSearchSelected: boolean;
  snackbar: string;
}

const initialState = {
  isMobile: false,
  path: '/',
  isSearchSelected: false,
  snackbar: '',
} as NavState;

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
    setSnackBar: (state, action) => {
      state.snackbar = action.payload?.message ?? '';
    },
  },
});

export const {
  updateIsMobile,
  updatePath,
  updateIsSearchSelected,
  setSnackBar,
} = nav.actions;
export default nav.reducer;
