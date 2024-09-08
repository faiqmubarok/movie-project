import { useState, useEffect } from "react";

import propTypes from "prop-types";
const useFetchMoviesBySearch = ({ query, page }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&query=${query}&page=${page}`
        );
        const data = await response.json();

        console.log(data);

        if (data.results) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        } else {
          setMovies([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query, page]);

  return { movies, loading, totalPages, error };
};

useFetchMoviesBySearch.propTypes = {
  query: propTypes.string,
  page: propTypes.number,
};

export default useFetchMoviesBySearch;
