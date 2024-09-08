import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./layouts/Layout";
import PageTitle from "./components/PageTitle";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import SearchMovies from "./pages/SearchMovies/SearchMovies";
import FilterGenre from "./pages/FilterMovie/FilterGenre";
import FilterFeatured from "./pages/FilterMovie/FilterFeatured";
import People from "./pages/People";
import FilterRealesed from "./pages/FilterMovie/FilterReleased";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title={"Home | Nextflix"} />
              <Home />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <PageTitle title={"Movies | Nextflix"} />
              <Movies />
            </>
          }
        />
        <Route
          path="/movies/genre/:genreName"
          element={
            <>
              <FilterGenre />
            </>
          }
        />
        <Route
          path="/movies/featured/:endCoding"
          element={
            <>
              <FilterFeatured />
            </>
          }
        />
        <Route
          path="/movies/release/:year"
          element={
            <>
              <FilterRealesed />
            </>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <>
              <MovieDetails />
            </>
          }
        />
        <Route 
        path="/movies/search"
        element={
          <>
            <PageTitle title={"Search Movies | Nextflix"} />
            <SearchMovies />
          </>
        }
        />
        <Route
          path="/people"
          element={
            <>
              <PageTitle title={"People | Nextflix"} />
              <People />
            </>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
