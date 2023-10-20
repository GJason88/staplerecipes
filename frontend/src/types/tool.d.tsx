/* eslint-disable @typescript-eslint/no-unused-vars */
interface ToolsPageState {
  tools: Array<ToolState>;
  categories: Array<CategoryState>;
  isCreateToolDialog: boolean;
  isCreateCategoryDialog: boolean;
  createErrorMessage: string;
  curTabId?: number | false;
}

interface ToolState {
  toolId: number;
  toolName: string;
  categoryName: string;
}
