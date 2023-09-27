// Movies.js
import React, { useState } from 'react';

function Movies() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Виконайте запит до /search/search-movies API зі словом пошуку і оновіть стан з отриманими фільмами
    };

    return (
        <div>
            <h2>Пошук фільмів</h2>
            <input
                type="text"
                placeholder="Введіть ключове слово"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Пошук</button>
            <ul>
                {searchResults.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Movies;
