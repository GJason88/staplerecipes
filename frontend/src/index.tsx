import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import recipeReducer from './features/recipepage/recipeReducer.tsx';
import React from 'react';
import toolsReducer from './features/tools/toolsReducer.tsx';
import ingredientsReducer from './features/ingredients/ingredientsReducer.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './themes.tsx';
import layoutReducer from './layouts/layoutReducer.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import serviceReducer from './services/api/serviceReducer.tsx';
import { ConfirmProvider } from 'material-ui-confirm';
import adminReducer from './features/admin/adminReducer.tsx';

const reducer = combineReducers({
  layout: layoutReducer,
  service: serviceReducer,
  recipe: recipeReducer,
  tools: toolsReducer,
  ingredients: ingredientsReducer,
  admin: adminReducer,
});

export type IRootState = ReturnType<typeof reducer>;

const store = configureStore({ reducer });

const queryClient = new QueryClient();

// eslint-disable-next-line prettier/prettier
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ConfirmProvider>
          <CssBaseline />
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </ConfirmProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
