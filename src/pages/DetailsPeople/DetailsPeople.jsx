import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router-dom";

const DetailsPeople = () => {
  const { id } = useParams();
  const [detailsPeople, setDetailsPeople] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetailsPeople = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US`
        );

        const data = await response.json();
        setDetailsPeople(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailsPeople();
  }, [id]);

  const formatBiography = (text) => {
    if (!text) return "No biography available.";

    const MAX_PARAGRAPH_LENGTH = 500;
    const paragraphs = [];
    let start = 0;

    while (start < text.length) {
      let end = start + MAX_PARAGRAPH_LENGTH;
      if (end > text.length) end = text.length;

      let breakpoint = text.lastIndexOf(".", end);
      if (breakpoint > start) {
        end = breakpoint + 1;
      }

      paragraphs.push(text.substring(start, end).trim());
      start = end;
    }

    return paragraphs.map((paragraph, index) => (
      <p key={index} className="p-2 text-third text-justify">
        {paragraph}
      </p>
    ));
  };

  return (
    <>
      <PageTitle title={`${detailsPeople.name} | Nextflix`} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && detailsPeople && (
        <section className="w-full p-8 rounded-lg border border-secondary bg-black/30 flex flex-col">
          <div className="flex flex-col md:flex-row gap-10 border-b border-secondary mb-8 pb-10">
            <div className="mx-auto">
              <img
                loading="lazy"
                className="max-w-40 rounded-lg"
                src={`https://image.tmdb.org/t/p/w342/${detailsPeople.profile_path}`}
                alt={detailsPeople.name}
              />
            </div>
            <table className="w-full text-white text-sm">
              <tbody>
                <tr>
                  <td className="font-semibold p-2">Name:</td>
                  <td className="p-2 text-third">{detailsPeople.name}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2">Known for:</td>
                  <td className="p-2 text-third">
                    {detailsPeople.known_for_department}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold p-2">Birthday:</td>
                  <td className="p-2 text-third">
                    {detailsPeople.birthday || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold p-2">Place of Birth:</td>
                  <td className="p-2 text-third">
                    {detailsPeople.place_of_birth || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold p-2">Popularity:</td>
                  <td className="p-2 text-third">{detailsPeople.popularity}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-white text-sm">
            <p className="font-semibold p-2">Biography:</p>
            {formatBiography(detailsPeople.biography)}
          </div>
        </section>
      )}
    </>
  );
};

export default DetailsPeople;
