import { useParams } from "react-router-dom";
import movies from "../../movies";

export function MoviePage() {
  const params = useParams();

  const movie = movies.filter((currentMovie) => {
    return currentMovie.id === Number(params.movieId);
  })[0];

  return (
    <>
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="Poster do filme"
      />
    </>
  );
}
