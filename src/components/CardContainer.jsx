import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import propTypes from "prop-types";
import Card from "./Card/CardMovie";
import CardTvShow from "./Card/CardTvShow";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const CardContainer = ({ title, data, endPoint, isMovie }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  function formattedFeatured(formatName) {
    return formatName.replace(/_/g, "-");
  }


  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold border-l-4 border-accent pl-2 text-accent">
          {title}
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 rounded-lg text-white border border-secondary hover:text-accent hover:bg-secondary disabled:cursor-not-allowed disabled:hover:text-white disabled:hover:bg-transparent shadow-md"
            disabled={isBeginning}
          >
            <MdNavigateBefore className="w-6 h-6" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className=" p-2 rounded-lg text-white border border-secondary hover:text-accent hover:bg-secondary disabled:cursor-not-allowed disabled:hover:text-white disabled:hover:bg-transparent shadow-md"
            disabled={isEnd}
          >
            <MdNavigateNext className="w-6 h-6" />
          </button>
          {endPoint === "" ? null : (
          <NavLink 
          to={isMovie ? `/movies/featured/${formattedFeatured(endPoint)}` 
          : `/tvshow/featured/${endPoint}`}
          className="text-accent font-medium hover:underline flex items-center">
            See All
          </NavLink>
          )
          }
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={3}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {data.slice(0, 10).map((item) => (
          <SwiperSlide className="mb-2" key={item.id}>
            {isMovie ? <Card movie={item} /> : <CardTvShow tvShow={item}/>}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

CardContainer.propTypes = {
  title: propTypes.string,
  data: propTypes.array,
  endPoint: propTypes.string,
  isMovie: propTypes.bool,
};

export default CardContainer;
