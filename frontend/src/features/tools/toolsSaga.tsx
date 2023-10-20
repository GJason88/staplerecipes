/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toolsApi } from '../../services/api';
import camelcaseKeys from 'camelcase-keys';

interface GetResponse {
  data: {
    categories: Array<CategoryState>; // in snake_case
    tools: Array<ToolState>; // in snake_case
  };
}

interface ModifyResponse {
  status: string;
}

function* getTools() {
  try {
    const response: GetResponse = yield call(toolsApi.retrieveAllTools);
    yield put({
      type: 'tools/updateTools',
      payload: camelcaseKeys(response.data, { deep: true }),
    });
  } catch (e) {
    console.log(e);
  }
}

function* addTool(action) {
  try {
    const response: ModifyResponse = yield call(
      toolsApi.createTool,
      action.payload
    );

    yield all([
      put({ type: 'tools/getCategoriesRequest' }),
      put({ type: 'tools/getToolsRequest' }),
    ]);
  } catch (e) {
    yield put({
      type: 'tools/updateCreateErrorMessage',
      payload: e.response.data,
    });
  }
}

function* removeTool(action) {
  try {
    const response: ModifyResponse = yield call(
      toolsApi.deleteTool,
      action.payload
    );
    yield all([
      put({ type: 'tools/getCategoriesRequest' }),
      put({ type: 'tools/getToolsRequest' }),
    ]);
  } catch (e) {
    console.log(e);
  }
}

function* getCategories() {
  try {
    const response: GetResponse = yield call(toolsApi.retrieveAllCategories);
    yield put({
      type: 'tools/updateCategories',
      payload: camelcaseKeys(response.data, { deep: true }),
    });
  } catch (e) {
    console.log(e);
  }
}

function* addCategory(action) {
  try {
    const response: ModifyResponse = yield call(
      toolsApi.createCategory,
      action.payload
    );
    yield all([
      put({ type: 'tools/getCategoriesRequest' }),
      put({ type: 'tools/getToolsRequest' }),
    ]);
  } catch (e) {
    console.log(e);
    yield put({
      type: 'tools/updateCreateErrorMessage',
      payload: e.response.data,
    });
  }
}

function* removeCategory(action) {
  try {
    const response: ModifyResponse = yield call(
      toolsApi.deleteCategory,
      action.payload // cat id
    );
    yield all([
      put({ type: 'tools/getCategoriesRequest' }),
      put({ type: 'tools/getToolsRequest' }),
    ]);
  } catch (e) {
    console.log(e);
  }
}

export default function* toolsSaga() {
  yield takeLatest('tools/getToolsRequest', getTools);
  yield takeLatest('tools/getCategoriesRequest', getCategories);
  yield takeLatest('tools/addToolRequest', addTool);
  yield takeLatest('tools/addCategoryRequest', addCategory);
  yield takeLatest('tools/removeToolRequest', removeTool);
  yield takeLatest('tools/removeCategoryRequest', removeCategory);
}
