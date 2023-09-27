// MovieDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from './MovieApi';

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
        <div>
            <h1>{movieDetails.title}</h1>
            <p>Release Date: {movieDetails.release_date}</p>
            <p>Overview: {movieDetails.overview}</p>
            {/* Додайте додаткову інформацію про фільм */}
        </div>
    );
}

export default MovieDetailsPage;
