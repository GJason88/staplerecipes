import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/nav/Sidebar';
import { Box } from '@mui/material';
import TopAppBar from './components/nav/TopAppBar';

const Home = lazy(() => import('./components/routes/Home'));
const Recipes = lazy(() => import('./components/routes/Recipes'));

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <TopAppBar />
      <Suspense fallback={<div className='container'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
