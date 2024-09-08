import useFetchMoviesFeatured from "../../hooks/useFetchMoviesFeatured"
import CardContainer from "../CardContainer"

const NowPlaying = () => {
  const endPoint = "now_playing"
  const { data, loading, error } = useFetchMoviesFeatured({endPoint : endPoint, page : 1})
  
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
          <CardContainer title="Now Playing" data={data} endPoint={endPoint} />
      )}
    </>
  )
}

export default NowPlaying
