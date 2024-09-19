import CardContainer from "../CardContainer";
import useFetchTvShowList from "../../hooks/useFetchTvShowList";

const Popular = () => {
  const endPoint = "popular";
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
            title={"Popular"}
            data={tvShows}
            endPoint={"popular"}
            isMovie={false}
          />
        </>
      )}
    </div>
  );
};

export default Popular;
