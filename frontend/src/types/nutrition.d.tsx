/* eslint-disable @typescript-eslint/no-unused-vars */
interface NutrientState {
  nutrientId: number;
  nutrientName: string;
  unit: string;
  dv?: number;
}

interface NutritionState {
  [key: string]: number; // nutrient fdc id to amount
}

interface NutritionProps {
  nutrition: NutritionState;
  nutrients: { [key: string]: NutrientState };
  fs: number;
}
