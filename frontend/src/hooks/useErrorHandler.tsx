import { useDispatch } from 'react-redux';
import { setResult } from '../services/api/serviceReducer';
import catchError from './helpers/catchError';

const useErrorHandler = () => {
  const dispatch = useDispatch();
  return (e: unknown) => {
    dispatch(setResult({ severity: 'error', message: catchError(e) }));
  };
};

export default useErrorHandler;
