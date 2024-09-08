import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CardSearch = ({ link, image, title, paragraf, onClearInput }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <NavLink
        to={link}
        onClick={onClearInput}
        className="w-full p-2 text-sm text-white flex items-center gap-2 group hover:bg-secondary"
      >
        <img
          src={`${imageBaseUrl}${image}`}
          className="w-16 h-20"
          alt={title}
        />
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium">{title}</span>
          <span className="text-third text-xs">
            {paragraf}
          </span>
        </div>
      </NavLink>
    </>
  );
};

CardSearch.propTypes = {
  seachResult: propTypes.array,
  onClearInput: propTypes.func,
  link: propTypes.string,
  image: propTypes.string,
  title: propTypes.string,
  paragraf: propTypes.string,
};

export default CardSearch;
