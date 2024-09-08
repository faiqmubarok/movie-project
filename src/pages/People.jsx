import { useEffect, useState } from "react";
import CardPeople from "../components/Card/CardPeople";
import TitlePage from "../components/TitlePage";
import Search from "../components/Search/Search";

const People = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularCast = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        const data = await response.json();
        setCast(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPopularCast();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
        <section className="w-full max-w-3xl mx-auto mb-7">
          <Search placeholder="actor" typeSearch={"person"} />
        </section>
          {/* Title Page */}
          <TitlePage title="Most Popular Actor" />
          {/* List Card People */}
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cast.map((actor) => (
              <CardPeople key={actor.id} actor={actor} />
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default People;
