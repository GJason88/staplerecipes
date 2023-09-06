import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navReducer from './redux/components/nav/navReducer.tsx';
import { Provider } from 'react-redux';
import recipeGridReducer from './redux/components/recipes/recipesReducer.tsx';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

const reducer = combineReducers({
  nav: navReducer,
  recipegrid: recipeGridReducer,
});

const store = configureStore({ reducer });
export type IRootState = ReturnType<typeof reducer>;

// eslint-disable-next-line prettier/prettier
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
