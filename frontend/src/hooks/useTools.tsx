import { useQuery } from 'react-query';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { setResult } from '../services/api/serviceReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const useTools = () => {
  const dispatch = useDispatch();
  try {
    const { data: tools } = useQuery('tools', fetchTools);
    return tools ? camelcaseKeys(tools, { deep: true }) : [];
  } catch (e) {
    let message = 'Failed to fetch tools';
    if (axios.isAxiosError(e)) {
      message = e.response?.data ?? message;
    }
    dispatch(
      setResult({
        message,
        severity: 'error',
      })
    );
  }
};

const fetchTools = async () => {
  const response = await toolsApi.retrieveAllTools();
  return response.data as Array<ToolState>;
};

export default useTools;
