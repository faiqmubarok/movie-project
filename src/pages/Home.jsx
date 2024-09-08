import Popular from "../components/Home/Popular";
import NowPlaying from "../components/Home/NowPlaying";
import TopRated from "../components/Home/TopRated";
import Upcoming from "../components/Home/Upcoming";
import CarouselJumbotron from "../components/Carousel/CarouselJumbotron";

const Home = () => {
  return (
    <>
      <section className="mb-7">
        <CarouselJumbotron />
      </section>
      <section className="flex flex-col gap-1">
        <div>
          <NowPlaying />
        </div>
        <div>
          <Popular />
        </div>
        <div>
          <TopRated />
        </div>
        <div>
          <Upcoming />
        </div>
      </section>
    </>
  );
};

export default Home;
