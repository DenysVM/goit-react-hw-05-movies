// MoviesPage.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../components/MovieApi';

function MoviesPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query') || '';
        setSearchQuery(query);

        if (query) {
            async function fetchMovies() {
                try {
                    const movies = await searchMovies(query);
                    setSearchResults(movies);
                } catch (error) {
                    console.error('Error searching movies:', error);
                }
            }

            fetchMovies();
        }
    }, [location.search]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?query=${searchQuery}`);
    };

    return (
        <div>
            <h1>Search Movies</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search for movies"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {searchResults.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesPage;
