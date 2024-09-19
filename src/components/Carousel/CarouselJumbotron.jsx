import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import propTypes from "prop-types";
import useFetchMoviesFeatured from "../../hooks/useFetchMoviesFeatured";
import genresMovie from "../../data/genresMovie.json";
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { useRef } from "react";

const CarouselJumbotron = () => {
  const swiperRef = useRef(null);

  const { data, loading, error } = useFetchMoviesFeatured({
    endPoint: "popular",
    page: 1,
  });

  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
  const getGenreName = (genreId) => {
    const genre = genresMovie.genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "Unknown";
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {!loading && !error && (
        <div className="relative w-full h-72 md:h-96 lg:h-[450px] overflow-hidden">
          <Swiper
            ref={swiperRef}
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="mySwiper w-full h-full"
          >
            {data.slice(11, 18).map((movie, index) => (
              <SwiperSlide className="w-full h-full" key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={`${imageBaseUrl}${movie.backdrop_path}`}
                    alt={`Backdrop ${index}`}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent flex items-end justify-between p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col gap-3">
                      <NavLink
                        to={`/movies/${movie.id}`}
                        className="px-5 py-2 border rounded-full border-accent hover:bg-accent flex items-center gap-2 w-fit text-xs font-medium text-accent hover:text-white mb-2"
                      >
                        <FaPlay />
                        Watch
                      </NavLink>
                      <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-start">
                        {movie.title}
                      </h2>
                      <div className="flex gap-1">
                        {movie.genre_ids.map((genreId) => (
                          <span
                            key={genreId}
                            className="px-2 py-0.5 bg-white/30 rounded-full text-xs text-white backdrop-blur-md"
                          >
                            {getGenreName(genreId)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className=""></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

CarouselJumbotron.propTypes = {
  backdrops: propTypes.arrayOf(propTypes.string).isRequired,
};

export default CarouselJumbotron;
