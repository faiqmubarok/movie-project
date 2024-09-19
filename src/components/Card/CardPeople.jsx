import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

const CardPeople = ({ actor }) => {
  return (
    <>
      <NavLink to={`/people/${actor.id}`} className="bg-black/30 hover:bg-secondary shadow-md border border-secondary text-white px-3 py-4 rounded-lg transition-colors duration-500 group">
        <div className="rounded-lg mb-4 overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
            alt={actor.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-bold">{actor.name}</h3>
        <p className="text-sm text-third">
          Popularity: {actor.popularity.toFixed(1)}
        </p>
      </NavLink>
    </>
  );
};

CardPeople.propTypes = {
  actor: propTypes.object,
};

export default CardPeople;
