import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
// import NotFound from './pages/NotFound/NotFound';
// import HomePage from './pages/HomePage/HomePage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
// import MovieCast from './components/MovieCast/MovieCast'
// import MovieReviews from './components/MovieReviews/MovieReviews';
import { lazy, Suspense } from 'react';

const MoviesPage  = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));



const App = () => {

  return (
    <>
      <Header />
      <Suspense fallback={<h2>Завантаження...зачекайте, будь ласка!</h2>} >
      <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="MovieCast" element={<MovieCast />} />
        <Route path="MovieReviews" element={<MovieReviews />} />
    </Route>
    <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App