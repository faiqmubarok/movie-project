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
                    <a href="">
                    <img
                        className="w-20"
                        src="/public/tmdb-logo.svg"
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
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
