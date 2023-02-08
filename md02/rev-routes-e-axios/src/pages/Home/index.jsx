import axios from "axios";
import { Link } from "react-router-dom";
// import movies from "../../movies";
import { useEffect, useState } from "react";

export function Home() {
  const [movies, setMovies] = useState([]);
  console.log("Oi");

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=1dbc566a4812e099606bf66f83159d6e"
      );

      setMovies(response.data.results);
    }

    fetchMovies();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=1dbc566a4812e099606bf66f83159d6e"
  //     )
  //     .then((delivery) => {
  //       setMovies(delivery.data.results);
  //     });
  // }, []);

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
