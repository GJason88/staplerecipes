import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '..';
import { setResult } from '../services/api/serviceReducer';

export default function ServiceResult() {
  const dispatch = useDispatch();
  const { message, severity } = useSelector<IRootState, ServiceState>(
    (state) => state.service
  );
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setResult({}));
  };
  console.log('fsdf');
  return (
    message &&
    severity && (
      <Snackbar
        open
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleClose} sx={{ width: '100%' }} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    )
  );
}
