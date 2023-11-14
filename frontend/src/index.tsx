import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
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
import { QueryClient, QueryClientProvider } from 'react-query';
import serviceReducer from './services/api/serviceReducer.tsx';
import adminIngredientsReducer from './features/admin/components/ingredients/adminIngredientsReducer.tsx';
import adminRecipesReducer from './features/admin/components/recipes/adminRecipesReducer.tsx';
import adminToolsReducer from './features/admin/components/tools/adminToolsReducer.tsx';

const reducer = combineReducers({
  layout: layoutReducer,
  service: serviceReducer,
  recipe: recipeReducer,
  tools: toolsReducer,
  ingredients: ingredientsReducer,
  adminIngredients: adminIngredientsReducer,
  adminRecipes: adminRecipesReducer,
  adminTools: adminToolsReducer,
});

export type IRootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

const queryClient = new QueryClient();

sagaMiddleware.run(rootSaga);

// eslint-disable-next-line prettier/prettier
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
