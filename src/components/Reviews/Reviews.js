import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '..//../services/MovieApi';

function ReviewsPage() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchMovieReviews() {
            try {
                const movieReviews = await getMovieReviews(movieId);
                setReviews(movieReviews);
            } catch (error) {
                console.error('Error fetching movie reviews:', error);
            }
        }

        fetchMovieReviews();
    }, [movieId]);

    return (
        <div>
            <ul>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <li key={review.id}>
                            <h3>{review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    ))
                ) : (
                    <p>No reviews available for this movie.</p>
                )}
            </ul>
        </div>
    );
}

export default ReviewsPage;
