import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/MovieApi';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const details = await getMovieDetails(movieId);
                setMovieDetails(details);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        }

        fetchMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.goBack}>
                Go back
            </Link>
            <div className={styles.details}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    className={styles.poster}
                />
                <div className={styles.details_info}>
                    <h1 className={styles.title}>{movieDetails.title}</h1>
                    <p className={styles.releaseDate}>
                        Release Date: {movieDetails.release_date}
                    </p>
                    <p className={styles.overview}>Overview: {movieDetails.overview}</p>
                    <p className={styles.genre}>
                        Genre: {movieDetails.genres.map((genre) => genre.name).join(", ")}
                    </p>
                </div>
            </div>
            <div className={styles.additionalInfo}>
                <h2>Additional information</h2>
                <div className={styles.infoLinks}><Link to={`cast`} className={styles.link}>
                    Cast
                </Link>
                    <Link to={`reviews`} className={styles.link}>
                        Reviews
                    </Link></div>
            </div>
            <Outlet />
        </div>

    );
}

export default MovieDetailsPage;