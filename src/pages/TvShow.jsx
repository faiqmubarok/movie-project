import AiringToday from "../components/TvShow/AiringToday";
import OnTheAir from "../components/TvShow/OnTheAir";
import Popular from "../components/TvShow/Popular";
import TopRated from "../components/TvShow/TopRated";
const TvShow = () => {
  return (
    <>
      <AiringToday />
      <OnTheAir />
      <Popular />
      <TopRated />
    </>
  );
};

export default TvShow;
