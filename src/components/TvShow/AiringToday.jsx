import CardContainer from "../CardContainer";
import useFetchTvShowList from "../../hooks/useFetchTvShowList";

const AiringToday = () => {
  const endPoint = "airing_today";
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
            title={"Airing Today"}
            data={tvShows}
            endPoint={"airing_today"}
            isMovie={false}
          />
        </>
      )}
    </div>
  );
};

export default AiringToday;
