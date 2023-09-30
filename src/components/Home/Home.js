

import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/MovieApi';
import styles from './Home.module.css';
import MoviesList from '../../components/MoviesList/MoviesList';


function Home() {
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
            <MoviesList movies={trendingMovies} />
        </div>
    );
}

export default Home;