/* eslint-disable @typescript-eslint/no-unused-vars */
interface CategoryState {
  categoryId: number | null;
  categoryName: string;
}

interface SearchListProps {
  title?: string;
  items: Array<{ name: string, id: number | null }>;
  isLoading?: boolean;
  width?: string;
  handleItemSelect: (index: number) => void;
  handleItemDelete?: (id: string) => false | void;
}
