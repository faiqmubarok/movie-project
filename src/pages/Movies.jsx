import { NavLink } from "react-router-dom";
import genreMovies from "../data/genresMovie.json";

const Movies = () => {
  const featured = [
    {
      name: "Now Playing",
      endCoding: "now_playing",
    },
    {
      name: "Popular",
      endCoding: "popular",
    },
    {
      name: "Top Rated",
      endCoding: "top_rated",
    },
    {
      name: "Upcoming",
      endCoding: "upcoming",
    },
  ];

  const releaseYears = Array.from({ length: 24 }, (v, i) => 2001 + i);

  function formattedGenre(formatName) {
    return formatName.toLowerCase().replace(/\s+/g, "-");
  }

  function formattedFeatured(formatName) {
    return formatName.replace(/_/g, "-");
  }

  return (
    <>
      <div className="space-y-4">
        {/* Recomendation */}
        <div className="">
          <h1 className="text-2xl font-bold text-white border-l-4 border-accent pl-2 mb-3">
            Recomendation
          </h1>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {featured.map((item) => (
              <NavLink
                to={`/movies/featured/${formattedFeatured(item.endCoding)}`}
                key={item.endCoding}
                className="w-full bg-secondary text-white text-center rounded-lg p-3 hover:bg-accent font-medium shadow-md"
              >
                {item.name}
              </NavLink>
            ))}
          </section>
        </div>
        {/* Genre */}
        <div className="">
          <h1 className="text-2xl font-bold text-white border-l-4 border-accent pl-2 mb-3">
            Genre
          </h1>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {genreMovies.genres.map((genre) => (
              <NavLink
                key={genre.id}
                to={`/movies/genre/${formattedGenre(genre.name)}`}
                className="w-full bg-secondary text-white text-center rounded-lg p-3 hover:bg-accent font-medium shadow-md"
              >
                {genre.name}
              </NavLink>
            ))}
          </section>
        </div>
        {/* Release Year */}
        <div className="">
          <h1 className="text-2xl font-bold text-white border-l-4 border-accent pl-2 mb-3">
            Release Year
          </h1>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {releaseYears.map((year) => (
              <NavLink
              to={`/movies/release/${year}`}
              key={year}
              className='w-full bg-secondary text-white text-center rounded-lg p-3 hover:bg-accent font-medium shadow-md'
              >
                {year}
              </NavLink>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Movies;

