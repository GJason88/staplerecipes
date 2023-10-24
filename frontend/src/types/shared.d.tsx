/* eslint-disable @typescript-eslint/no-unused-vars */
interface CategoryState {
  categoryId: number;
  categoryName: string;
}

// May be deprecated
interface NutritionState {
  protein: NutrientState;
  totalFat: NutrientState;
  carbs: NutrientState;
  calories: NutrientState;
  totalSugars: NutrientState;
  dietaryFiber: NutrientState;
  sodium: NutrientState;
  addedSugars: NutrientState;
  cholesterol: NutrientState;
  transFat: NutrientState;
  saturatedFat: NutrientState;
  calcium: NutrientState;
  iron: NutrientState;
  magnesium: NutrientState;
  potassium: NutrientState;
  zinc: NutrientState;
  chromium: NutrientState;
  copper: NutrientState;
  iodine: NutrientState;
  manganese: NutrientState;
  molybdenum: NutrientState;
  selenium: NutrientState;
  vitaminA: NutrientState;
  alphaCarotene: NutrientState;
  betaCarotene: NutrientState;
  vitaminE: NutrientState;
  vitaminD: NutrientState;
  vitaminC: NutrientState;
  thiaminB1: NutrientState;
  riboflavinB2: NutrientState;
  niacinB3: NutrientState;
  pantothenicAcidB5: NutrientState;
  pyridoxineB6: NutrientState;
  biotinB7: NutrientState;
  folateB9: NutrientState;
  cyanocobalaminB12: NutrientState;
  choline: NutrientState;
  vitaminK2: NutrientState;
  vitaminK1: NutrientState;
}

interface NutrientState {
  nutrientName: string;
  amount: number;
  unit: string;
}
