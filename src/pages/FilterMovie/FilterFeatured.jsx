import { useParams } from "react-router-dom";
import { useState } from "react";
import TitlePage from "../../components/TitlePage";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card/CardMovie";
import Pagination from "../../components/Pagination/Pagination";
import useFetchMoviesFeatured from "../../hooks/useFetchMoviesFeatured";

const FilterFeatured = () => {
  const { endCoding } = useParams();

  function formattedFeatured(formatName) {
    return formatName.replace(/-/g, "_");
  }

  function formattedFeaturedSpace(formatName) {
    return formatName
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  const endCodingFormatted = formattedFeatured(endCoding);

  const [page, setPage] = useState(1);

  const { data, loading, error, totalPages } = useFetchMoviesFeatured({
    endPoint: endCodingFormatted,
    page,
  });

  return (
    <>
      <PageTitle
        title={`${formattedFeaturedSpace(endCodingFormatted)} | Nextflix`}
      />
      <TitlePage title={formattedFeaturedSpace(endCodingFormatted)} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && data.length === 0 && <p>No results found</p>}
      {!loading && !error && (
        <>
          <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-5">
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

export default FilterFeatured;
