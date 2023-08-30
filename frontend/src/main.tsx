import React from 'react';
import ReactDOM from 'react-dom/client';
import Recipe from './components/Recipe.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Recipe />
    </React.StrictMode>
);
