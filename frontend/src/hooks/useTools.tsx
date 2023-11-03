import { useQuery } from 'react-query';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';

const useTools = () => {
  const { data: tools } = useQuery('tools', fetchTools);
  return camelcaseKeys(tools ?? [], { deep: true });
};

const fetchTools = async () => {
  const response = await toolsApi.retrieveAllTools();
  return response.data as Array<ToolState>;
};

export default useTools;
