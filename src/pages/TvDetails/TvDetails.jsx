import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import PageTitle from "../../components/PageTitle";

const TvDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tvDetails, setTvDetails] = useState(null);

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchTvDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        const data = await response.json();
        setTvDetails(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTvDetails();
  }, [id]);

  return (
    <>
      <PageTitle title={`${tvDetails?.name} | Nextflix`} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && tvDetails && (
        <>
          <a
            target="_blank"
            href={tvDetails?.homepage}
            className="noopener noreferrer cursor-pointer  bg-gray-200"
          >
            <div className="relative">
              <img
                src={`${imageBaseUrl}${tvDetails?.backdrop_path}`}
                alt={tvDetails?.name}
                className="w-full h-auto object-cover rounded-lg mb-6"
              />
              <FaPlay className="w-16 h-16 opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
          </a>
          <section className="w-full flex gap-5 items-center mb-4 text-third text-sm border-y py-6 border-secondary">
            <img
              loading="lazy"
              className="w-28 md:w-32 rounded-lg h-auto"
              src={`${imageBaseUrl}${tvDetails.poster_path}`}
              alt=""
            />
            <div className="w-full">
              <div className="flex justify-between w-full items-start">
                <h1 className="text-white text-3xl font-semibold">
                  {tvDetails?.name}
                </h1>
              </div>
              <p className="text-base text-white mb-1.5">
                {tvDetails.tagline && `"${tvDetails.tagline}"`}
              </p>
              <div className="w-full flex flex-wrap text-xs gap-4">
                <span>{tvDetails?.first_air_date}</span>
                <span>Seasons: {tvDetails?.number_of_seasons}</span>
                <span>Episodes: {tvDetails?.number_of_episodes}</span>
              </div>
              <div className="flex items-center gap-2 py-2.5">
                <p className="text-xl px-2 py-1 bg-secondary text-white font-medium">
                  {tvDetails?.vote_average.toFixed(1)}
                </p>
                <p className="text-xs">{tvDetails?.vote_count} votes</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tvDetails?.genres.map((genre) => (
                  <span key={genre.id} className={`text-white text-sm`}>
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section>
            <h1 className="text-white text-lg font-medium mb-2">Overview :</h1>
            <p className="text-third text-sm text-justify">
              {tvDetails?.overview}
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-white font-semibold mt-8 mb-4">
              Seasons
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tvDetails?.seasons.slice(0, 6).map((season) => (
                <>
                  <div
                    key={season.id}
                    className="rounded-lg overflow-hidden"
                  >
                    <img
                      loading="lazy"
                      className="mb-2 w-full h-48 md:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      src={`${imageBaseUrl}${season.poster_path}`}
                      alt={season.name}
                    />
                    <p className="text-white text-sm font-medium truncate mb-1">
                      {season.name}
                    </p>
                    <p className="text-xs text-third">
                      {season.episode_count} episodes
                    </p>
                  </div>
                </>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default TvDetails;
