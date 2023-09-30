import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/MovieApi';
import styles from './Cast.module.css';
import defaultImage from '../../images/default_image.png';

function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function fetchMovieCast() {
            try {
                const credits = await getMovieCredits(movieId);
                setCast(credits.cast);
            } catch (error) {
                console.error('Error fetching movie cast:', error);
            }
        }

        fetchMovieCast();
    }, [movieId]);

    return (
        <div className={styles.castContainer}>
            {cast.map((actor) => (
                <div className={styles.castCard} key={actor.id}>
                    <img
                        src={actor.profile_path
                            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                            : defaultImage}
                        alt={actor.name}
                    />
                    <h3>{actor.name}</h3>
                    <p>{actor.character}</p>
                </div>
            ))}
        </div>
    );
}

export default Cast;
