import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navReducer from './redux/components/nav/navReducer.tsx';
import { Provider } from 'react-redux';
import recipeGridReducer from './redux/components/recipes/recipegridReducer.tsx';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import recipeReducer from './redux/components/recipes/recipeReducer.tsx';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas.tsx';
import toolsReducer from './redux/components/tools/toolsReducer.tsx';
import ingredientsReducer from './redux/components/ingredients/ingredientsReducer.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './themes.tsx';

const reducer = combineReducers({
  nav: navReducer,
  recipegrid: recipeGridReducer,
  recipe: recipeReducer,
  tools: toolsReducer,
  ingredients: ingredientsReducer,
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
