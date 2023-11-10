/* eslint-disable @typescript-eslint/no-unused-vars */
interface CategoryState {
  categoryId: number;
  categoryName: string;
}

interface SearchListProps {
  title?: string;
  items: Array<string>;
  isLoading?: boolean;
  width?: string;
  onItemClick: (index: number) => void;
}
