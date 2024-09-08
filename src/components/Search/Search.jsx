import { useState, useEffect } from "react";
import CardSearch from "../Card/CardSearch";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Search = ({ placeholder, typeSearch, onCloseActiveSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [debouncedInput, setDebouncedInput] = useState(searchInput);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(searchInput);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  useEffect(() => {
    if (debouncedInput.trim() === "") {
      setSearchResult([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/${typeSearch}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&query=${debouncedInput}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setSearchResult(data.results);
      } catch (error) {
        setError(error.message);
        setSearchResult([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedInput, typeSearch]);

  function handleClearInput() {
    setSearchInput("");
    onCloseActiveSearch();
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (typeSearch === "person") {
      return;
    } else if (typeSearch === "movie" && debouncedInput.trim() !== "") {
      navigate(`/movies/search?q=${searchInput}`);
      handleClearInput();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-3 pe-10 text-sm text-white border border-secondary rounded-lg outline-none bg-secondary focus:ring-accent focus:border-accent placeholder:text-third"
            placeholder={`Search ${placeholder} here...`}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        {debouncedInput.trim() === "" ? null : (
          <section className="relative">
            <div className="absolute inset-0 top-3 flex items-center flex-col ">
              <div className="bg-black backdrop-blur-md w-full rounded-lg p-2">
                {loading && (
                  <p className="text-third text-center py-3 w-full">
                    Loading...
                  </p>
                )}
                {error && <p>{error}</p>}
                {!loading && !error && searchResult.length === 0 && (
                  <p className="text-third text-center py-3 w-full">
                    No result
                  </p>
                )}
                {!loading && !error && searchResult.length > 0 && (
                  <>
                    <ul className="w-full overflow-y-auto max-h-72">
                      {searchResult.slice(0, 10).map((result, index) => (
                        <CardSearch
                          key={index}
                          link={
                            typeSearch === "movie"
                              ? `/movies/${result.id}`
                              : `/person/${result.id}`
                          }
                          image={
                            typeSearch === "movie"
                              ? result.poster_path
                              : result.profile_path
                          }
                          title={
                            typeSearch === "movie" ? result.title : result.name
                          }
                          paragraf={
                            typeSearch === "movie"
                              ? result.release_date?.slice(0, 4)
                              : `Popularity: ${result.popularity}`
                          }
                          onClearInput={handleClearInput}
                        />
                      ))}
                    </ul>
                    {typeSearch === "movie" ? (
                      <button
                        type="submit"
                        className="w-full p-2 text-sm text-accent hover:underline"
                      >
                        View all result
                      </button>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          </section>
        )}
      </form>
    </>
  );
};

Search.propTypes = {
  onCloseActiveSearch: propTypes.func,
  placeholder: propTypes.string,
  typeSearch: propTypes.string,
};

export default Search;
