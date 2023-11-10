/* eslint-disable @typescript-eslint/no-unused-vars */
interface CategoryState {
  categoryId: number;
  categoryName: string;
}

interface SearchListProps {
  items: Array<string>;
  isLoading?: boolean;
  onItemClick: (index: number) => void;
}
