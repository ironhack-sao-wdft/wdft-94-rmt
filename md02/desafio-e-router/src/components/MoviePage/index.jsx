import { useParams } from "react-router-dom";
import movies from "../../assets/movies";

export function MoviePage() {
  const params = useParams();
  console.log(params);

  const movie = movies.filter((currentElement) => {
    return currentElement.id === Number(params.movieID);
  })[0];

  return (
    <>
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
    </>
  );
}
