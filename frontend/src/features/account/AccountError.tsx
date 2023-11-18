import { Alert } from '@mui/material';
import useAuth from '../../hooks/useAuth';

export default function AccountError() {
  const { error } = useAuth();

  return <Alert>{error}</Alert>;
}
