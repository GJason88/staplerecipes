/* eslint-disable @typescript-eslint/no-unused-vars */
interface CategoryState {
  categoryId: number | null;
  categoryName: string;
}

interface SearchListProps {
  title?: string;
  items: Array<string>;
  isLoading?: boolean;
  width?: string;
  handleItemClick: (index: number) => void;
  handleItemDelete?: (index: number) => false | void;
}
