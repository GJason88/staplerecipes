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

const reducer = combineReducers({
  nav: navReducer,
  recipegrid: recipeGridReducer,
  recipe: recipeReducer,
});

export type IRootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ 
  reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) 
});

sagaMiddleware.run(rootSaga);

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
