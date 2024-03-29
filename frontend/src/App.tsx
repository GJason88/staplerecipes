import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import Appbar from './layouts/Appbar';
import ServiceResult from './components/ServiceResult';
import { BackButton, Content } from './layouts/styledComponents';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { theme } from './themes';

const Home = lazy(() => import('./pages/Home'));
const Recipes = lazy(() => import('./pages/Recipes'));
const Recipe = lazy(() => import('./pages/Recipe'));
const Info = lazy(() => import('./pages/Info'));
const Tools = lazy(() => import('./pages/Tools'));
const Ingredients = lazy(() => import('./pages/Ingredients'));
const Nutrition = lazy(() => import('./pages/Nutrition'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const Admin = lazy(() => import('./pages/Admin'));

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isInnerPath = location.pathname.split('/').length > 2;
  return (
    <Stack gap={'24px'} alignItems='center'>
      <ServiceResult />
      <Appbar />
      <Content
        sx={{ pt: isInnerPath ? '48px' : '', [theme.breakpoints.down('sm')]: { pt: isInnerPath ? '48px' : '' } }}
      >
        {isInnerPath && (
          <BackButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </BackButton>
        )}
        <Suspense fallback={<div className='container'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/:id' element={<Recipe />} />
            <Route path='/info' element={<Info />} />
            <Route path='/info/tools' element={<Tools />} />
            <Route path='/info/ingredients' element={<Ingredients />} />
            <Route path='/info/nutrition' element={<Nutrition />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </Suspense>
      </Content>
    </Stack>
  );
}
