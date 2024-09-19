import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchTvShowList from "../../hooks/useFetchTvShowList";
import PageTitle from "../../components/PageTitle";
import Pagination from "../../components/Pagination/Pagination";
import CardTvShow from "../../components/Card/CardTvShow";
import TitlePage from "../../components/TitlePage";

const TvShowList = () => {
  const { endPoint } = useParams();

  const [page, setPage] = useState(1);
  const { tvShows, loading, error, totalPages } = useFetchTvShowList({
    endPoint,
    page,
  })

  function formattedTvShowList(formatName) {
    return formatName
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <>
      <PageTitle title={`${formattedTvShowList(endPoint)} | Nextflix`} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <TitlePage title={formattedTvShowList(endPoint)} />
          <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-5">
            {tvShows.map((tvShow) => (
              <CardTvShow key={tvShow?.id} tvShow={tvShow} />
            ))}
          </ul>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </>
  );
};

export default TvShowList;
