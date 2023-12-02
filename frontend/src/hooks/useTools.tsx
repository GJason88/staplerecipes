import { useQuery } from 'react-query';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { setResult } from '../services/api/serviceReducer';
import { useDispatch } from 'react-redux';
import catchError from './helpers/functions/catchError';
import getCurrentUserToken from './helpers/functions/getCurrentUserToken';
import useMutationHelper from './helpers/useMutationHelper';

const useTools = () => {
  const dispatch = useDispatch();
  const { data: tools } = useQuery('tools', fetchTools, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e) =>
      dispatch(setResult({ message: catchError(e), severity: 'error' })),
  });
  const queriesToInvalidateOnMutate = ['tools'];
  const createTool = useMutationHelper(
    async (data: ToolState) =>
      toolsApi.createTool(data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully created tool'
  );
  const updateTool = useMutationHelper(
    async ({ id, data }: { id: string; data: ToolState }) =>
      toolsApi.updateTool(id, data, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully updated tool'
  );
  const deleteTool = useMutationHelper(
    async (id: string) => toolsApi.deleteTool(id, await getCurrentUserToken()),
    queriesToInvalidateOnMutate,
    'Successfully deleted tool'
  );
  return {
    tools: camelcaseKeys(tools ?? [], { deep: true }),
    createTool,
    updateTool,
    deleteTool,
  };
};

const fetchTools = async () => {
  try {
    const response = await toolsApi.retrieveAllTools();
    return response.data as Array<ToolState>;
  } catch (e) {
    Promise.reject(new Error(catchError(e)));
  }
};

export default useTools;
