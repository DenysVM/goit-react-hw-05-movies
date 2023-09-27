// CastPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '..//components/MovieApi';

function CastPage() {
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
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map((actor) => (
                    <li key={actor.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                        />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CastPage;
