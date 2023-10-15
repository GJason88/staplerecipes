import { createSlice } from '@reduxjs/toolkit';

export interface ToolsPageState {
  tools: Array<ToolState>;
  categories: Array<CategoryState>;
  isCreateToolDialog: boolean;
  isCreateCategoryDialog: boolean;
  createErrorMessage: string;
  curTabId?: number | false;
}

export interface ToolState {
  toolId: number;
  toolName: string;
  categoryId: number;
}

export interface CategoryState {
  categoryId: number;
  categoryName: string;
}

const initialState = {
  tools: [],
  categories: [],
  isCreateToolDialog: false,
  isCreateCategoryDialog: false,
  createErrorMessage: '',
  curTabId: false,
} as ToolsPageState;

const tools = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    addToolRequest: (state, action) => {
      state.isCreateToolDialog = false;
    },
    addCategoryRequest: (state, action) => {
      state.isCreateCategoryDialog = false;
    },
    removeToolRequest: (state, action) => {},
    removeCategoryRequest: (state, action) => {},
    getToolsRequest: (state) => {},
    getCategoriesRequest: (state) => {},
    updateTools: (state, action) => {
      state.tools = action.payload;
    },
    updateCategories: (state, action) => {
      state.categories = action.payload;
      if (
        state.categories.length != 0 &&
        (!state.curTabId ||
          !state.categories.some((cat) => cat.categoryId === state.curTabId))
      ) {
        state.curTabId = state.categories[0].categoryId;
      }
    },
    updateCreateToolDialog: (state, action) => {
      state.isCreateToolDialog = action.payload;
      state.createErrorMessage = '';
    },
    updateCreateCategoryDialog: (state, action) => {
      state.isCreateCategoryDialog = action.payload;
      state.createErrorMessage = '';
    },
    updateCreateErrorMessage: (state, action) => {
      state.createErrorMessage = action.payload;
    },
    updateCurTabId: (state, action) => {
      state.curTabId = action.payload;
    },
  },
});

export const {
  addCategoryRequest,
  addToolRequest,
  getToolsRequest,
  getCategoriesRequest,
  removeToolRequest,
  removeCategoryRequest,
  updateCreateToolDialog,
  updateCreateCategoryDialog,
  updateCreateErrorMessage,
  updateCurTabId,
} = tools.actions;
export default tools.reducer;
