import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MoviesList.module.css'; // Импортируем CSS модуль

function MoviesList({ movies }) {
    return (
        <ul className={styles['movies-list']}>
            {movies.map((movie) => (
                <li key={movie.id} className={styles['movie-item']}>
                    <span className={styles['movie-icon']}>🎬</span>
                    <NavLink to={`/movies/${movie.id}`} className={styles['movie-link']}>{movie.title}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default MoviesList;
