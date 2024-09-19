import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="grid grid-cols-2  w-fit">
            <div className="col-span-2 text-start w-full">
                <p className="text-third  text-xs">Data is provided by : TMDB</p>
                </div>
                <div className="flex items-center gap-4 col-span-2">
                    <Logo />
                    <p className="text-xl font-extrabold text-white">X</p>
                    <a target="_blank" className="noopener noreferrer" href={'https://developer.themoviedb.org/docs/getting-started'}>
                    <img
                        className="w-20"
                        src="/tmdb-logo.svg"
                        alt="TMDB.Logo"
                    />
                    </a>
                </div>
                
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 font-medium text-white uppercase">Movie</h2>
              <ul className="text-third flex flex-col">
                <NavLink to={'/movies/featured/now_playing'} className="mb-4 hover:text-accent text-sm">
                  Now Playing
                </NavLink>
                <NavLink to={'/movies/featured/popular'} className="mb-4 hover:text-accent text-sm">
                  Popular
                </NavLink>
                <NavLink to={'/movies/featured/top_rated'} className="mb-4 hover:text-accent text-sm">
                  Top Rated
                </NavLink>
                <NavLink to={'/movies/featured/upcoming'} className="mb-4 hover:text-accent text-sm">
                  Upcoming
                </NavLink>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-medium text-white uppercase">Tv Show</h2>
              <ul className="text-third flex flex-col">
                <NavLink to={'/tvshow/featured/airing_today'} className="mb-4 hover:text-accent text-sm">
                  Airing Today
                </NavLink>
                <NavLink to={'/tvshow/featured/on_the_air'} className="mb-4 hover:text-accent text-sm">
                  On The Air
                </NavLink>
                <NavLink to={'/tvshow/featured/popular'} className="mb-4 hover:text-accent text-sm">
                  Popular
                </NavLink>
                <NavLink to={'/tvshow/featured/top_rated'} className="mb-4 hover:text-accent text-sm">
                  Top Rated
                </NavLink>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-medium text-white uppercase">
                Legal
              </h2>
              <ul className="text-third flex flex-col">
                <li className="mb-4 hover:text-accent text-sm">
                  <a href="">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4 hover:text-accent text-sm">
                  <a href="" >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-secondary border sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-third sm:text-center">
            © 2024{" "}
            <a
              target="_blank"
              href="https://faiqmubarok.vercel.app/"
              className="hover:underline noopener noreferer"
            >
              Faiqmubarok
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
