import axios from "axios";
import { Link } from "react-router-dom";
import movies from "../../movies";

export function Home() {
  const apiResponse = axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=1dbc566a4812e099606bf66f83159d6e"
  );

  console.log(apiResponse);

  return (
    <>
      <h1>Home</h1>

      {movies.map((currentMovie) => {
        return (
          <Link to={`/movie/${currentMovie.id}`}>
            <h2>{currentMovie.original_title}</h2>
          </Link>
        );
      })}
    </>
  );
}
