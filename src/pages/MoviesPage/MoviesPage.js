import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchMovies } from '../../services/MovieApi';
import styles from './Movies.module.css'

function MoviesPage() {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isEmptyQuery, setIsEmptyQuery] = useState(false);

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

    const handleSearch = () => {
        if (searchQuery) {
            search();
        } else {
            setIsEmptyQuery(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (searchQuery) {
                search();
            } else {
                setIsEmptyQuery(true);
            }
        }
    };

    const search = async () => {
        try {
            const movies = await searchMovies(searchQuery);
            setSearchResults(movies);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div className={styles['movies-container']
        } >
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
            <ul>
                {searchResults.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesPage;
