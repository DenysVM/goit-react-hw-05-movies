import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/MovieApi';
import styles from './HomePage.module.css';

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
        <div className={styles.container}>
            <h1>Trending Movies</h1>
            <ul>
                {trendingMovies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} className={styles.link}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
