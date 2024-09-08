import propTypes from "prop-types";
import genresMovie from "../../data/genresMovie.json";
import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Card = ({ movie }) => {
  const getGenreName = (genreId) => {
    const genre = genresMovie.genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "Unknown";
  };
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <NavLink
        to={`/movies/${movie.id}`}
        className="rounded-lg group"
      >
        <div className="w-full h-full">
          <div className="overflow-hidden rounded-lg mb-2 relative">
            <img
              loading="lazy"
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-48 md:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
              <FaPlay className="w-7 h-7 opacity-50 hidden group-hover:block text-white transition-all duration-300" />
            </div>
            <span className="absolute top-0 left-0 bg-accent px-2 py-1 text-sm text-white">
              {/* {movie.genre[0].name} */}
              {getGenreName(movie.genre_ids[0])}
            </span>
          </div>
          <p className="text-white text-sm font-medium truncate mb-1">
            {movie.title}
          </p>
          <p className="text-xs text-third">{movie.release_date.slice(0, 4)}</p>
        </div>
      </NavLink>
    </>
  );
};

Card.propTypes = {
  movie: propTypes.object,
};

export default Card;
