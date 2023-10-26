import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import recipeGridReducer from './features/recipegrid/recipegridReducer.tsx';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import recipeReducer from './features/recipepage/recipeReducer.tsx';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas.tsx';
import toolsReducer from './features/tools/toolsReducer.tsx';
import ingredientsReducer from './features/ingredients/ingredientsReducer.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './themes.tsx';
import layoutReducer from './layouts/layoutReducer.tsx';
import adminReducer from './features/admin/adminReducer.tsx';

const reducer = combineReducers({
  layout: layoutReducer,
  recipegrid: recipeGridReducer,
  recipe: recipeReducer,
  tools: toolsReducer,
  ingredients: ingredientsReducer,
  admin: adminReducer,
});

export type IRootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// eslint-disable-next-line prettier/prettier
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
