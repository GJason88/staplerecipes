import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  isMobile: boolean;
  snackbar: string;
}

const initialState = {
  isMobile: false,
  snackbar: '',
} as NavState;

const nav = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    updateIsMobile: (state) => {
      state.isMobile = !state.isMobile;
    },
    setSnackBar: (state, action) => {
      state.snackbar = action.payload?.message ?? '';
    },
  },
});

export const {
  updateIsMobile,
  setSnackBar,
} = nav.actions;
export default nav.reducer;
