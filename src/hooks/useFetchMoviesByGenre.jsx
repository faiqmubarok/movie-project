import { useEffect, useState } from "react";
import propTypes from "prop-types";

const useFetchMoviesByGenre = ({ genreId, page }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&with_genres=${genreId}&page=${page}`
        );
        const data = await response.json();

        if (data.results) {
          setData(data.results);
          setTotalPages(data.total_pages);
        } else {
          setData([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (genreId) {
      fetchMoviesByGenre();
    }
  }, [genreId, page]);

  return { data, loading, error, totalPages };
};

useFetchMoviesByGenre.propTypes = {
  genreId: propTypes.number,
  page: propTypes.number,
};


export default useFetchMoviesByGenre;
