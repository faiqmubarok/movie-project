import CardContainer from "../CardContainer";
import useFetchMoviesFeatured from "../../hooks/useFetchMoviesFeatured";

const Upcoming = () => {
    const endPoint = "upcoming"
  const { data, loading, error } = useFetchMoviesFeatured({endPoint : endPoint, page : 1});

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <CardContainer title="Up Coming" data={data} endPoint={endPoint} />
      )}
    </>
  );
};

export default Upcoming;
