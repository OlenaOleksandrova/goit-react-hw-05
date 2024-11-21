import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews';


const App = () => {

  return (
    <>
      <Header />
      <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="MovieCast" element={<MovieCast />} />
        <Route path="MovieReviews" element={<MovieReviews />} />
    </Route>
    <Route path="*" element={<NotFound />} />
</Routes>
    </>
  );
}

export default App