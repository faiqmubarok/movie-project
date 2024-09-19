import { useState, useEffect } from "react";

const useFetchTvShowList = ({ endPoint, page }) => {

    const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTvshows = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${endPoint}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=${page}&language=en-US`
        );
        const data = await response.json();
        setTvShows(data?.results);
        setTotalPages(data?.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTvshows();
  }, [endPoint, page]);
  

  return {
    tvShows,
    loading,
    error,
    totalPages};
};

export default useFetchTvShowList;
