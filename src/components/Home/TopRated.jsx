
import useFetchMoviesFeatured from "../../hooks/useFetchMoviesFeatured";
import CardContainer from "../CardContainer";

const TopRated = () => {
  const endPoint = "top_rated";
  const { data, loading, error } = useFetchMoviesFeatured({ endPoint : endPoint, page : 1});

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <CardContainer title="Top Rated" data={data} endPoint={endPoint} isMovie={true} />
      )}
    </>
  );
};

export default TopRated;
