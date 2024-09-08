import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/Card/CardMovie";
import useFetchMoviesBySearch from "../../hooks/useFetchMoviesBySearch";
import Pagination from "../../components/Pagination/Pagination";

const SearchMovies = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const [page, setPage] = useState(1);

  const { movies, loading, totalPages, error } = useFetchMoviesBySearch({
    query,
    page,
  });

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-white mb-5">Search Results for &quot;{query}&quot;</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && movies.length > 0 && (
          <>
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-5">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </ul>
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          </>
        )}
        {!loading && !error && movies.length === 0 && <p>No movies found</p>}
      </div>
    </>
  );
};

export default SearchMovies;
