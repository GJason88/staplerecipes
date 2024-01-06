import { useDispatch } from 'react-redux';
import { setActiveRoute } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';
import useTools from '../hooks/useTools';
import InfoListPage from '../features/info/InfoListPage';

export default function Tools() {
  const dispatch = useDispatch();
  const { tools } = useTools();
  const categoryOrder = ['Stoveware', 'Utensils', 'Dishes and Gadgets', 'Appliances'];
  const categorizedTools = tools.reduce<{ [key: string]: Array<string> }>((acc, tool) => {
    const category = tool.category.categoryName.toLowerCase();
    if (!(category in acc)) {
      acc[category] = [];
    }
    acc[category].push(tool.toolName);
    return acc;
  }, {});
  const orderedCategories: Array<InfoListSectionState> = [];
  categorizedTools &&
    categoryOrder.forEach((category) => {
      orderedCategories.push({ title: category, items: categorizedTools[category.toLowerCase()] });
    });
  useEffect(() => {
    dispatch(setActiveRoute(publicRoutes.info));
  }, [dispatch]);

  return <InfoListPage categories={orderedCategories}></InfoListPage>;
}
