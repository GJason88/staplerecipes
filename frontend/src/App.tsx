import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Appbar from './layouts/Appbar';
import ServiceResult from './components/ServiceResult';
import { Content } from './layouts/styledComponents';

const Home = lazy(() => import('./pages/Home'));
const Recipes = lazy(() => import('./pages/Recipes'));
const Recipe = lazy(() => import('./pages/Recipe'));
const Tools = lazy(() => import('./pages/Tools'));
const Ingredients = lazy(() => import('./pages/Ingredients'));
const Nutrition = lazy(() => import('./pages/Nutrition'));
const MealPlans = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin'));

export default function App() {
  return (
    <Stack gap={'24px'} alignItems='center'>
      <ServiceResult />
      <Appbar />
      <Content>
        <Suspense fallback={<div className='container'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/:id' element={<Recipe />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/ingredients' element={<Ingredients />} />
            <Route path='/nutrition' element={<Nutrition />} />
            <Route path='/mealplans' element={<MealPlans />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </Suspense>
      </Content>
    </Stack>
  );
}
