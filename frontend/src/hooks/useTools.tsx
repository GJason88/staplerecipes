import { useQuery } from 'react-query';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { setResult } from '../services/api/serviceReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const useTools = () => {
  const dispatch = useDispatch();
  const { data: tools } = useQuery('tools', fetchTools, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  return camelcaseKeys(tools ?? [], { deep: true });
};

const fetchTools = async () => {
  try {
    const response = await toolsApi.retrieveAllTools();
    return response.data as Array<ToolState>;
  } catch (e) {
    let message = 'Failed to fetch categories';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    throw new Error(message);
  }
};

export default useTools;
