import CardContainer from "../CardContainer";
import useFetchTvShowList from "../../hooks/useFetchTvShowList";

const TopRated = () => {
  const endPoint = "top_rated";
  const page = 1;

  const { tvShows, loading, error } = useFetchTvShowList({
    endPoint,
    page,
  });
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <CardContainer
            title={"Top Rated"}
            data={tvShows}
            endPoint={"top_rated"}
            isMovie={false}
          />
        </>
      )}
    </div>
  );
};

export default TopRated;
