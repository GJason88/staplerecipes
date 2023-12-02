import ToolsPage from '../features/tools/ToolsPage';
import { useDispatch } from 'react-redux';
import { setActiveRoute, setBreadcrumbs } from '../layouts/layoutReducer';
import { useEffect } from 'react';
import { publicRoutes } from '../data/constants';

export default function Tools() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([{ name: publicRoutes.tools.name, href: publicRoutes.tools.route }])
    );
    dispatch(setActiveRoute(publicRoutes.tools.route));
  }, [dispatch]);

  return <ToolsPage />;
}
