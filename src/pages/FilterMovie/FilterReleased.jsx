import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/CardMovie";
import Pagination from "../../components/Pagination/Pagination";
import TitlePage from "../../components/TitlePage";

const FilterRealesed = () => {
  const { year } = useParams();

  const [dataReleased, setDataReleased] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovieByReleased = async (pageNumber) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&primary_release_year=${year}&page=${pageNumber}`
        );

        const result = await response.json();
        setDataReleased(result.results);
        setTotalPages(result.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieByReleased(page);
  }, [year, page]);

  return (
    <>
      <PageTitle title={`Released ${year} | Nextflix`} />
      <TitlePage title={`Released ${year}`} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {dataReleased.length < 0 && <p>No data found</p>}
      {dataReleased.length > 0 && (
        <>
          <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {dataReleased.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </ul>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default FilterRealesed;
