import { useState, useEffect } from "react";
import propTypes from "prop-types";

const useFetchMoviesFeatured = ({ endPoint, page }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${endPoint}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=${page}`
        );
        const data = await response.json();
        if (data.results) {
          setData(data.results);
          setTotalPages(data.total_pages);
        } 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endPoint, page]);

  return {data, loading, error, totalPages};
};

useFetchMoviesFeatured.propTypes = {
  endPoint: propTypes.string,
  page: propTypes.number
};

export default useFetchMoviesFeatured;
