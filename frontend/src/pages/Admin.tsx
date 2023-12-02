import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminRoute } from '../data/constants';
import AdminPage from '../features/admin/AdminPage';
import { setBreadcrumbs, setActiveRoute } from '../layouts/layoutReducer';
import { auth } from '../config/firebase.config';

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  auth.currentUser
    ?.getIdTokenResult()
    .then((idToken) => setIsAdmin(idToken.claims.admin == true))
    .catch(() => {});
  useEffect(() => {
    dispatch(setBreadcrumbs([{ name: adminRoute.name, href: adminRoute.route }]));
    dispatch(setActiveRoute(adminRoute.route));
  }, [dispatch]);

  return isAdmin ? <AdminPage /> : <div style={{ paddingTop: 80, paddingLeft: 16 }}>Unauthorized User</div>;
}
