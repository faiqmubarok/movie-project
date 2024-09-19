import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center gap-1.5 p-1">
      <img className="w-7 h-7" src="/popcorn.png" alt="logo" />
      <span className="pt-1.5 font-bebas text-4xl text-accent font-bold">Nextflix</span>
    </NavLink>
  );
};

export default Logo;
