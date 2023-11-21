import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../hooks/useAuth';
import AccountForm from './AccountForm';
import Result from './pages/Result';
import ForgotPassword from './pages/ForgotPassword';

export default function AccountDialog() {
  const auth = useAuth();
  console.log(auth.dialogType);
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
          secondaryText='A verification link has been sent to your email'
          btnText='Close'
          btnAction={() => auth.setDialogType(null)}
        />
      )}
      {auth.dialogType === 'unverified-email' && (
        <Result
          result='failure'
          resultText='Email is not verified. Verification has been resent.'
          secondaryText='A verification link has been sent to your email'
          btnText='Close'
          btnAction={() => auth.setDialogType(null)}
        />
      )}
      {auth.dialogType === 'forgot-password' && (
        <ForgotPassword
          setDialogType={auth.setDialogType}
          sendPWResetEmail={auth.sendPWResetEmail}
        />
      )}
      {auth.dialogType === 'forgot-password-success' && (
        <Result
          result='success'
          resultText='Success!'
          secondaryText='A password reset link has been sent to your email if an account was associated with it'
          btnText='Return to login'
          btnAction={() => auth.setDialogType(null)}
        />
      )}
    </Dialog>
  );
}
