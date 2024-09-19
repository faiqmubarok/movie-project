import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { FaPlay } from "react-icons/fa";

import MovieRelated from "./MovieRelated";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function formattedGenre(formatName) {
    return formatName.toLowerCase().replace(/\s+/g, "-");
  }

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <PageTitle title={`${movieDetails?.title} | Nextflix`} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          {/* Movie Backdrop */}
          <a
            target="_blank"
            href={movieDetails?.homepage}
            className="noopener noreferrer cursor-pointer  bg-gray-200"
          >
            <div className="relative">
              <img
                src={`${imageBaseUrl}${movieDetails?.backdrop_path}`}
                alt={movieDetails?.title}
                className="w-full h-auto object-cover rounded-lg mb-6"
              />
              <FaPlay className="w-16 h-16 opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
          </a>
          {/* Details Section */}
          <section className="w-full flex gap-5 items-center mb-4 text-third text-sm border-y py-6 border-secondary">
            <img
              loading="lazy"
              className="w-28 md:w-32 rounded-lg h-auto"
              src={`${imageBaseUrl}${movieDetails?.poster_path}`}
              alt=""
            />
            <div className="w-full">
              <div className="flex justify-between w-full items-start">
                <h1 className="text-white text-3xl font-semibold">
                  {movieDetails?.title}
                </h1>
              </div>
              <p className="text-base text-white mb-1.5">
                {movieDetails?.tagline}
              </p>
              <div className="w-full flex flex-wrap text-xs gap-4">
                <span>{movieDetails?.release_date}</span>
                <span>{movieDetails?.production_countries[0].iso_3166_1}</span>
                <span>{movieDetails?.runtime} Min</span>
              </div>
              <div className="flex items-center gap-2 py-2.5">
                <p className="text-xl px-2 py-1 bg-secondary text-white font-medium">
                  {movieDetails?.vote_average.toFixed(1)}
                </p>
                <p className="text-xs">{movieDetails?.vote_count} votes</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {movieDetails?.genres.map((genre) => (
                  <NavLink
                    key={genre.id}
                    to={`/movies/genre/${formattedGenre(genre.name)}`}
                    className={`text-white hover:text-accent text-sm`}
                  >
                    {genre.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </section>
          {/* Movie Overview */}
          <section>
            <h1 className="text-white text-lg font-medium mb-2">Overview :</h1>
            <p className="text-third text-sm text-justify">
              {movieDetails?.overview}
            </p>
          </section>
          <MovieRelated genreId={movieDetails?.genres[0].id} />
        </>
      )}
    </>
  );
};

export default MovieDetails;
