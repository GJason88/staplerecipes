import ToolsPage from '../features/tools/ToolsPage';
import { useDispatch } from 'react-redux';
import {
  setActiveRoute,
  setBreadcrumbs,
} from '../redux/layout/layoutReducer';
import { useEffect } from 'react';
import { routes } from '../data/constants';

export default function Tools() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([{ name: routes.tools.name, href: routes.tools.route }])
    );
    dispatch(setActiveRoute(routes.tools.route));
  }, [dispatch]);

  return <ToolsPage />;
}
