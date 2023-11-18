import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../data/constants';
import useAuth from '../../hooks/useAuth';
import { Dialog, Tab, Tabs } from '@mui/material';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function AuthDialog() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<number>(0);
  const { currentUser, login, setError } = useAuth();

  useEffect(() => {
    if (currentUser) navigate(routes.home.route);
  }, [currentUser, navigate]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <Dialog
      open={true}
      fullWidth
      PaperProps={{ sx: { backgroundColor: '#f0f0f0' } }}
    >
      <Tabs
        variant='fullWidth'
        value={tab}
        onChange={(e, newTab: number) => setTab(newTab)}
      >
        <Tab label='Sign In'></Tab>
        <Tab label='Sign Up'></Tab>
      </Tabs>
      {tab == 0 && <SignIn />}
      {tab == 1 && <SignUp />}
    </Dialog>
  );
}
