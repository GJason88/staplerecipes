import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';
import useIngredients from '../hooks/useIngredients';
import InfoListPage from '../features/info/InfoListPage';

export default function Ingredients() {
  const dispatch = useDispatch();
  const { ingredients } = useIngredients();
  const categoryOrder = ['Grains', 'Vegetables', 'Fruit', 'Dairy', 'Other'];
  const categorizedIngredients = ingredients.reduce<{ [key: string]: Array<string> }>((acc, ingr) => {
    const category = ingr.category.categoryName.toLowerCase();
    if (!(category in acc)) {
      acc[category] = [];
    }
    acc[category].push(ingr.ingredientName);
    return acc;
  }, {});
  const orderedCategories: Array<InfoListSectionState> = [];
  categorizedIngredients &&
    categoryOrder.forEach((category) => {
      orderedCategories.push({ title: category, items: categorizedIngredients[category.toLowerCase()] });
    });

  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.info));
  }, [dispatch]);

  return <InfoListPage categories={orderedCategories} />;
}
