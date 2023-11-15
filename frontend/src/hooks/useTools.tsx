import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toolsApi } from '../services/api/server';
import camelcaseKeys from 'camelcase-keys';
import { setResult } from '../services/api/serviceReducer';
import { useDispatch } from 'react-redux';
import { setTool } from '../features/admin/components/tools/adminToolsReducer';
import catchError from './helpers/catchError';
import useErrorHandler from './useErrorHandler';

const useTools = () => {
  const dispatch = useDispatch();
  const errorHandler = useErrorHandler();
  const queryClient = useQueryClient();
  const { data: tools } = useQuery('tools', fetchTools, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: (e: Error) =>
      dispatch(setResult({ message: e.message, severity: 'error' })),
  });
  const mutationSuccess = (action: string) => {
    queryClient.invalidateQueries(['tools']);
    dispatch(
      setResult({
        severity: 'success',
        message: `Successfully ${action} tool.`,
      })
    );
  };
  const updateTool = useMutation({
    mutationFn: ({ id, data }: { id: string; data: ToolState }) =>
      toolsApi.updateTool(id, data),
    onSuccess: () => mutationSuccess('updated'),
    onError: errorHandler,
  });
  const deleteTool = useMutation({
    mutationFn: (id: string) => toolsApi.deleteTool(id),
    onSuccess: () => {
      mutationSuccess('deleted');
      dispatch(setTool(null));
    },
    onError: errorHandler,
  });
  return {
    tools: camelcaseKeys(tools ?? [], { deep: true }),
    updateTool: updateTool.mutate,
    deleteTool: deleteTool.mutate,
  };
};

const fetchTools = async () => {
  try {
    const response = await toolsApi.retrieveAllTools();
    return response.data as Array<ToolState>;
  } catch (e) {
    throw new Error(catchError(e));
  }
};

export default useTools;
