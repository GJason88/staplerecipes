import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  isMobile: boolean;
  snackbar: string;
  breadcrumbs: Array<BreadcrumbState>;
  activeRoute: string;
}

export interface BreadcrumbState {
  name: string;
  href: string;
}

const initialState = {
  isMobile: false,
  snackbar: '',
  breadcrumbs: [],
  activeRoute: '',
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
    setBreadcrumbs: (state, action) => {
      state.breadcrumbs = action.payload;
    },
    setActiveRoute: (state, action) => {
      state.activeRoute = action.payload;
    }
  },
});

export const { updateIsMobile, setSnackBar, setBreadcrumbs, setActiveRoute } = nav.actions;
export default nav.reducer;
