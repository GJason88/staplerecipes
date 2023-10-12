import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../redux/components/nav/navReducer';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBreadcrumbs([{ name: 'Home', href: '/' }]));
  }, [dispatch]);

  return <div></div>;
}
