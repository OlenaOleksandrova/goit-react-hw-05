import axios from 'axios';

const API_KEY = 'fb20431acdf6b09d79c01b1b48d72e74';
const BASE_URL = 'https://api.themoviedb.org/3';

// const headers = {
//   Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjIwNDMxYWNkZjZiMDlkNzljMDFiMWI0OGQ3MmU3NCIsIm5iZiI6MTczMjA0NTU5Ni45ODA5MDEsInN1YiI6IjY3M2NlODViZTc3MmNjYzE1NjQ1NDRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6lfHfhEgDQYB4m1hY1d1jXfJbVl9Af2kxBdP_Xf00w`,
// }; 

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
         headers: {
	// С ДЗ - Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjIwNDMxYWNkZjZiMDlkNzljMDFiMWI0OGQ3MmU3NCIsIm5iZiI6MTczMjA0NTU5Ni45ODA5MDEsInN1YiI6IjY3M2NlODViZTc3MmNjYzE1NjQ1NDRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6lfHfhEgDQYB4m1hY1d1jXfJbVl9Af2kxBdP_Xf00w'
  }, 
   });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjIwNDMxYWNkZjZiMDlkNzljMDFiMWI0OGQ3MmU3NCIsIm5iZiI6MTczMjA0NTU5Ni45ODA5MDEsInN1YiI6IjY3M2NlODViZTc3MmNjYzE1NjQ1NDRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6lfHfhEgDQYB4m1hY1d1jXfJbVl9Af2kxBdP_Xf00w'
        },
    });
    return response.data;
};

// Акторський склад
export const fetchMovieCredits = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error("Failed to fetch movie credits.");
  return await response.json();
};

// Запит оглядів reviws
export const fetchMovieReviews = async (movieId) => {
  const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error("Failed to fetch movie reviews.");
  return await response.json();
};
