/* eslint-disable @typescript-eslint/no-unused-vars */
interface AdminState {
  fdcIngredients: Array<FDCIngredientState>;
}

interface FDCIngredientState {
  fdcId: number;
  description: string;
}
