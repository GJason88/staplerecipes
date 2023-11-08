import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobile: false,
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
    setBreadcrumbs: (state, action) => {
      state.breadcrumbs = action.payload;
    },
    setActiveRoute: (state, action) => {
      state.activeRoute = action.payload;
    }
  },
});

export const { updateIsMobile, setBreadcrumbs, setActiveRoute } = layout.actions;
export default layout.reducer;
