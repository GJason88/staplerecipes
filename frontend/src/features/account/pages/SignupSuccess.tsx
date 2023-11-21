import { Button, Stack, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface SignUpSuccessProps {
  email: string | null;
  setDialogType: React.Dispatch<React.SetStateAction<DialogType | null>>;
}

export default function SignUpSuccess({
  email,
  setDialogType,
}: SignUpSuccessProps) {
  return (
    <Stack
      display='flex'
      gap={2}
      width='65%'
      alignItems='center'
      alignSelf='center'
      p='28px'
      sx={{ backgroundColor: '#f0f0f0' }}
    >
      <Typography textAlign='center' fontSize={30} fontWeight={700}>
        Successfully Signed Up
      </Typography>
      <Typography textAlign='center' fontSize={16}>
        A verification link has been sent to {email ?? 'your email'}.
      </Typography>
      <CheckCircleOutlineIcon sx={{ fontSize: 200, color: '#4bb543' }} />
      <Button
        onClick={() => setDialogType('form')}
        variant='contained'
        size='large'
      >
        Return to Login
      </Button>
    </Stack>
  );
}
