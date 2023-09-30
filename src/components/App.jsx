import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

const Home = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => (
  <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
