import ToolsPage from '../tools/ToolsPage';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../redux/components/nav/navReducer';
import { useEffect } from 'react';

export default function Tools() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBreadcrumbs([{ name: 'Tools', href: '/tools' }]));
  }, [dispatch]);

  return <ToolsPage />;
}
