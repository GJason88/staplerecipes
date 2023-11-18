import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './themes.tsx';
import layoutReducer from './layouts/layoutReducer.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import serviceReducer from './services/api/serviceReducer.tsx';
import { ConfirmProvider } from 'material-ui-confirm';
import adminReducer from './features/admin/adminReducer.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

const reducer = combineReducers({
  layout: layoutReducer,
  service: serviceReducer,
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
        <AuthProvider>
          <ConfirmProvider>
            <CssBaseline />
            <Provider store={store}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </Provider>
          </ConfirmProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
