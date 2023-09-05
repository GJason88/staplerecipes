import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './redux/components/sidebar/sidebarReducer';
import Home from './components/Home.tsx';
import { Provider } from 'react-redux';
import topAppBarReducer from './redux/components/topappbar/topAppBarReducer.tsx';
import recipeGridReducer from './redux/components/recipe/recipeGridReducer.tsx';

const reducer = combineReducers({
  sidebar: sidebarReducer,
  topappbar: topAppBarReducer,
  recipegrid: recipeGridReducer,
});

const store = configureStore({ reducer });
export type IRootState = ReturnType<typeof reducer>;

// eslint-disable-next-line prettier/prettier
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
);
