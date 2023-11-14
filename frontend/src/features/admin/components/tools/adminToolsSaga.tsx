/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, takeLatest } from 'redux-saga/effects';
import { toolsApi } from '../../../../services/api/server';

function* createNewTool(action: { type: string, payload: ToolState }) {
  try {
    yield call(toolsApi.createTool, action.payload);
    yield put({
      type: 'service/setResult',
      payload: {
        severity: 'success',
        message: 'Successfully created tool.',
      },
    });
  } catch (e) {
    yield put({
      type: 'service/setResult',
      payload: { severity: 'error', message: e.response.data },
    });
  }
}

function* updateTool(action: { type: string, payload: ToolState }) {
  try {
    yield call(
      toolsApi.updateTool,
      action.payload.toolId?.toString() ?? '',
      action.payload
    );
    yield put({
      type: 'service/setResult',
      payload: {
        severity: 'success',
        message: 'Successfully updated tool.',
      },
    });
  } catch (e) {
    yield put({
      type: 'service/setResult',
      payload: { severity: 'error', message: e.response.data },
    });
  }
}

export default function* adminToolsSaga() {
  yield takeLatest('adminTools/createNewToolRequest', createNewTool);
  yield takeLatest('adminTools/updateToolRequest', updateTool);
}
