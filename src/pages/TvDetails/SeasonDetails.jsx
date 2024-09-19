import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SeasonDetails = () => {
  const { id, seasonNumber } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [seasonDetails, setSeasonDetails] = useState(null);

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchSeasonDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        const data = await response.json();
        console.log(data)
        setSeasonDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeasonDetails();
  }, [id, seasonNumber]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && seasonDetails && (
        <>
          <h1 className="text-3xl font-bold text-white mb-4">
            {seasonDetails.name}
          </h1>
          <img
            src={`${imageBaseUrl}${seasonDetails.poster_path}`}
            alt={seasonDetails.name}
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-300 mb-4">
            {seasonDetails.overview}
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Episodes</h2>
          <ul className="list-disc list-inside">
            {seasonDetails.episodes.map((episode) => (
              <li key={episode.id} className="mb-2">
                <strong>Episode {episode.episode_number}:</strong>{" "}
                {episode.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SeasonDetails;
