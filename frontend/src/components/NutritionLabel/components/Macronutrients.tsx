import Nutrient from './Nutrient';

export default function Macronutrients({
  nutrition,
  nutrients,
  fs,
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
        fs={fs}
        bold
      />
      <Nutrient
        nutrient={saturatedFat}
        amount={nutrition[saturatedFat.nutrientId]}
        fs={fs}
        pl={2}
      />
      <Nutrient
        nutrient={cholesterol}
        amount={nutrition[cholesterol.nutrientId]}
        fs={fs}
        bold
      />
      <Nutrient
        nutrient={sodium}
        amount={nutrition[sodium.nutrientId]}
        fs={fs}
        bold
      />
      <Nutrient
        nutrient={totalCarbs}
        amount={nutrition[totalCarbs.nutrientId]}
        fs={fs}
        bold
      />
      <Nutrient
        nutrient={dietaryFiber}
        amount={nutrition[dietaryFiber.nutrientId]}
        fs={fs}
        pl={2}
      />
      <Nutrient
        nutrient={totalSugars}
        amount={nutrition[totalSugars.nutrientId]}
        fs={fs}
        pl={2}
      />
      <Nutrient
        nutrient={addedSugars}
        amount={nutrition[addedSugars.nutrientId]}
        fs={fs}
        pl={4}
      />
      <Nutrient
        nutrient={protein}
        amount={nutrition[protein.nutrientId]}
        fs={fs}
        bold
        noDivider
      />
    </>
  );
}
