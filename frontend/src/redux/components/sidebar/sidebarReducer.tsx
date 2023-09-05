import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  isMobile: boolean,
  isHomeSelected: boolean,
}

const initialState = { isMobile: false, isHomeSelected: true } as SidebarState;

const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    updateIsMobile: (state) => {
      state.isMobile = !state.isMobile;
    },
    updateIsHomeSelected: (state, action) => {
      state.isHomeSelected = action.payload === "homeURL";
    },
  },
});

export const { updateIsMobile, updateIsHomeSelected } = sidebar.actions;
export default sidebar.reducer;
