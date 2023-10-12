import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setActiveRoute,
  setBreadcrumbs,
} from '../../redux/components/nav/navReducer';
import { routes } from '../../constants';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([{ name: routes.home.name, href: routes.home.route }])
    );
    dispatch(setActiveRoute(routes.home.route));
  }, [dispatch]);

  return <div></div>;
}
