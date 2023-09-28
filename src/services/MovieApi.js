const API_KEY = '67a6af9ae04fc7f0bc30333e65dc36b5';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchTrendingMovies() {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Error fetching trending movies');
    }
    const data = await response.json();
    return data.results;
}

async function searchMovies(query) {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
        throw new Error('Error searching movies');
    }
    const data = await response.json();
    return data.results;
}

async function getMovieDetails(movieId) {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Error fetching movie details');
    }
    const data = await response.json();
    return data;
}

async function getMovieCredits(movieId) {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Error fetching movie credits');
    }
    const data = await response.json();
    return data;
}

async function getMovieReviews(movieId) {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Error fetching movie reviews');
    }
    const data = await response.json();
    return data.results;
}

export {
    fetchTrendingMovies,
    searchMovies,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews,
};
