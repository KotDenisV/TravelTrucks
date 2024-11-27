import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CamperReviews from './components/CamperReviews/CamperReviews';
import CamperFeatures from './components/CamperFeatures/CamperFeatures';
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/CatalogPage/MoviesPage'));
const CamperDetailsPage = lazy(() => import('./pages/MovieDetailsPage/CamperDetailsPage'));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h2>LOADING YOUR COMPONENT!</h2>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='catalog/:id' element={<CamperDetailsPage />} >
            <Route path='features' element={<CamperFeatures />} />
            <Route path='reviews' element={<CamperReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App
