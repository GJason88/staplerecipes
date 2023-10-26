import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { routes } from '../data/constants';
import AdminPage from '../features/admin/AdminPage';
import { setBreadcrumbs, setActiveRoute } from '../layouts/layoutReducer';

export default function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([{ name: routes.admin.name, href: routes.admin.route }])
    );
    dispatch(setActiveRoute(routes.admin.route));
  }, [dispatch]);

  return <AdminPage />;
}
