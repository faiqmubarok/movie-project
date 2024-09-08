import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router-dom";
import genreMovies from "../../data/genresMovie.json";
import TitlePage from "../../components/TitlePage";
import Card from "../../components/Card/CardMovie";
import Pagination from "../../components/Pagination/Pagination";
import useFetchMoviesByGenre from "../../hooks/useFetchMoviesByGenre";

const SearchList = () => {
  const { genreName } = useParams();
  const genreId = getIdFromName(genreName);

  function getIdFromName(name){
    const genre = genreMovies.genres.find(
      (g) => g.name.toLowerCase().replace(/\s+/g, "-") === name.toLowerCase()
    );
    return genre ? genre.id : null;
  };

  function formatGenreName (str) {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [page, setPage] = useState(1);

  const { data, loading, error, totalPages } = useFetchMoviesByGenre({ genreId , page });

  return (
    <>
      <PageTitle title={`${formatGenreName(genreName)} | Nextflix`} />
      <TitlePage title={formatGenreName(genreName)} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && data.length === 0 && <p>No results found</p>}
      {!loading && !error && data.length > 0 && (
        <>
          <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </ul>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default SearchList;
