// HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../components/MovieApi';

function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const movies = await fetchTrendingMovies();
                setTrendingMovies(movies);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Trending Movies</h1>
            <ul>
                {trendingMovies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
