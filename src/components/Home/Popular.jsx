import CardContainer from "../CardContainer";
import useFetchMoviesFeatured from "../../hooks/useFetchMoviesFeatured";

const Popular = () => {
  const endPoint = "popular"
  const { data, loading, error } = useFetchMoviesFeatured({endPoint : endPoint, page : 1});

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <CardContainer title="Popular" data={data} endPoint={endPoint} isMovie={true} />
      )}
    </>
  );
};

export default Popular;
