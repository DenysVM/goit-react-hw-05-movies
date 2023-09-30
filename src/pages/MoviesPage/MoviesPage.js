import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../services/MovieApi';
import styles from './Movies.module.css';
import MoviesList from '../../components/MoviesList/MoviesList';

function MoviesPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isEmptyQuery, setIsEmptyQuery] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query') || '';
        setSearchQuery(query);

        if (query) {
            fetchMovies(query);
        }
    }, [location.search]);

    const handleSearch = () => {
        if (searchQuery) {
            setIsEmptyQuery(false);
            updateURL(searchQuery);
        } else {
            setIsEmptyQuery(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const fetchMovies = async (query) => {
        try {
            const movies = await searchMovies(query);
            setSearchResults(movies);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    const updateURL = (query) => {
        navigate(`?query=${query}`);
    };

    return (
        <div className={styles['movies-container']}>
            <h1>Search Movies</h1>
            <div className={styles['search-container']}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search for movies"
                />
                <button className={styles['search-button']} onClick={handleSearch}>
                    Search
                </button>
            </div>
            {isEmptyQuery && <p>Please enter a search query</p>}
            <MoviesList movies={searchResults} />
        </div>
    );
}

export default MoviesPage;
