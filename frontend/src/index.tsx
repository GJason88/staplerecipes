import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navReducer from './redux/components/nav/navReducer.tsx';
import { Provider } from 'react-redux';
import recipeGridReducer from './redux/components/recipes/recipegridReducer.tsx';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import recipeReducer from './redux/components/recipes/recipeReducer.tsx';

const reducer = combineReducers({
  nav: navReducer,
  recipegrid: recipeGridReducer,
  recipe: recipeReducer,
});

const store = configureStore({ reducer });
export type IRootState = ReturnType<typeof reducer>;

// eslint-disable-next-line prettier/prettier
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
