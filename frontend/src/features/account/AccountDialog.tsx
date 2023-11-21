import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../hooks/useAuth';
import AccountForm from './AccountForm';
import Result from './pages/Result';

export default function AccountDialog() {
  const auth = useAuth();
  return (
    <Dialog
      open={true}
      fullWidth
      PaperProps={{ sx: { backgroundColor: '#f0f0f0' } }}
    >
      <IconButton
        aria-label='close'
        onClick={() => auth.setDialogType(null)}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      {auth.dialogType === 'form' && <AccountForm {...auth} />}
      {auth.dialogType === 'signup-success' && (
        <Result
          result='success'
          resultText='Signed up successfully'
          setDialogType={auth.setDialogType}
        />
      )}
      {auth.dialogType === 'unverified-email' && (
        <Result
          result='failure'
          resultText='Email is not verified'
          setDialogType={auth.setDialogType}
        />
      )}
    </Dialog>
  );
}
