import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/nav/Sidebar';
import { Box } from '@mui/material';
import TopAppBar from './components/nav/TopAppBar';

const Home = lazy(() => import('./components/routes/Home'));
const Recipes = lazy(() => import('./components/routes/Recipes'));
const EditRecipe = lazy(() => import('./components/recipes/recipe/EditRecipe'));
const Tools = lazy(() => import('./components/routes/Tools'));
const Ingredients = lazy(() => import('./components/routes/Ingredients'));
const Nutrition = lazy(() => import('./components/routes/Nutrition'));
const MealPlans = lazy(() => import('./components/routes/Home'));

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <TopAppBar />
      <Suspense fallback={<div className='container'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipes/:id' element={<EditRecipe />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/ingredients' element={<Ingredients />} />
          <Route path='/nutrition' element={<Nutrition />} />
          <Route path='/mealplans' element={<MealPlans />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
