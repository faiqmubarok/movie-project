import propTypes from "prop-types";
import useFetchMoviesByGenre from "../../hooks/useFetchMoviesByGenre";
import CardContainer from "../../components/CardContainer";

const MovieRelated = ({ genreId }) => {
  const { data, loading, error } = useFetchMoviesByGenre({ genreId, page: 1 });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="pt-8">
          <CardContainer title="Movie Related" data={data} endPoint={""} isMovie={true} />
        </div>
      )}
    </>
  );
};

MovieRelated.propTypes = {
  genreId: propTypes.number,
};

export default MovieRelated;
