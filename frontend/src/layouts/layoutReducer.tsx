import { createSlice } from '@reduxjs/toolkit';

interface LayoutState {
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
} as LayoutState;

const layout = createSlice({
  name: 'layout',
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

export const { updateIsMobile, setSnackBar, setBreadcrumbs, setActiveRoute } = layout.actions;
export default layout.reducer;
