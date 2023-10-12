import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../redux/components/nav/navReducer';
import IngredientsPage from '../ingredients/IngredientsPage';
import { useEffect } from 'react';

export default function Tools() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBreadcrumbs([{ name: 'Ingredients', href: '/ingredients' }]));
  }, [dispatch]);

  return <IngredientsPage />;
}
