import Nutrient from './Nutrient';

export default function Macronutrients({
  nutrition,
  nutrients,
}: NutritionProps) {
  const {
    totalFat,
    saturatedFat,
    cholesterol,
    sodium,
    totalCarbs,
    dietaryFiber,
    totalSugars,
    addedSugars,
    protein,
  } = nutrients;
  return (
    <>
      <Nutrient
        nutrient={totalFat}
        amount={nutrition[totalFat.nutrientId]}
        bold
      />
      <Nutrient
        nutrient={saturatedFat}
        amount={nutrition[saturatedFat.nutrientId]}
        pl={2}
      />
      <Nutrient
        nutrient={cholesterol}
        amount={nutrition[cholesterol.nutrientId]}
        bold
      />
      <Nutrient
        nutrient={sodium}
        amount={nutrition[sodium.nutrientId]}
        bold
      />
      <Nutrient
        nutrient={totalCarbs}
        amount={nutrition[totalCarbs.nutrientId]}
        bold
      />
      <Nutrient
        nutrient={dietaryFiber}
        amount={nutrition[dietaryFiber.nutrientId]}
        pl={2}
      />
      <Nutrient
        nutrient={totalSugars}
        amount={nutrition[totalSugars.nutrientId]}
        pl={2}
      />
      <Nutrient
        nutrient={addedSugars}
        amount={nutrition[addedSugars.nutrientId]}
        pl={4}
      />
      <Nutrient
        nutrient={protein}
        amount={nutrition[protein.nutrientId]}
        bold
        noDivider
      />
    </>
  );
}
