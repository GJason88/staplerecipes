import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/nav/Sidebar';
import { Box } from '@mui/material';
import TopAppBar from './components/nav/TopAppBar';

const Home = lazy(() => import('./components/routes/Home'));
const Recipes = lazy(() => import('./components/routes/Recipes'));
const Recipe = lazy(() => import('./components/recipes/recipe/Recipe'));
const Nutrition = lazy(() => import('./components/routes/Home'));

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <TopAppBar />
      <Suspense fallback={<div className='container'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipes/*' element={<Recipe />} />
          <Route path='/nutrition' element={<Nutrition />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
