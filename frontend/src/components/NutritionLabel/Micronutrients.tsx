import Nutrient from './Nutrient';

export default function Micronutrients({ nutrition }: NutrientsProps) {
  const micronutrients = Object.values(nutrition).filter(
    ({ nutrientId }) =>
      nutrientId > 1087 && nutrientId < 1185 && nutrientId !== 1093
  );
  return (
    <>
      {micronutrients.map((nutrient: NutrientState, index) => (
        <Nutrient
          key={index}
          nutrient={nutrient}
          noDivider={index === micronutrients.length - 1}
        />
      ))}
    </>
  );
}
