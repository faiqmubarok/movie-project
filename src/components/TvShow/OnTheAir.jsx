import CardContainer from "../CardContainer";
import useFetchTvShowList from "../../hooks/useFetchTvShowList";

const OnTheAir = () => {
  const endPoint = "on_the_air";
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
            title={"On The Air"}
            data={tvShows}
            endPoint={"on_the_air"}
            isMovie={false}
          />
        </>
      )}
    </div>
  );
};

export default OnTheAir;
