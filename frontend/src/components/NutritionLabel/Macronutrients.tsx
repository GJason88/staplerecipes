import Nutrient from './Nutrient';

export default function Macronutrients({ nutrition }: NutritionProps) {
  return (
    <>
      <Nutrient nutrient={nutrition.totalFat} bold />
      <Nutrient nutrient={nutrition.saturatedFat} pl={2} />
      <Nutrient nutrient={nutrition.cholesterol} bold />
      <Nutrient nutrient={nutrition.sodium} bold />
      <Nutrient nutrient={nutrition.carbs} bold />
      <Nutrient nutrient={nutrition.dietaryFiber} pl={2} />
      <Nutrient nutrient={nutrition.totalSugars} pl={2} />
      <Nutrient nutrient={nutrition.addedSugars} pl={4} />
      <Nutrient nutrient={nutrition.protein} bold noDivider />
    </>
  );
}
