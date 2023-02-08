import { useParams } from "react-router-dom";
// import movies from "../../movies";

import axios from "axios";
import { useEffect, useState } from "react";

export function MoviePage() {
  const params = useParams();
  const [movie, setMovie] = useState({});

  // const movie = movies.filter((currentMovie) => {
  //   return currentMovie.id === Number(params.movieId);
  // })[0];

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=1dbc566a4812e099606bf66f83159d6e`
      );

      console.log(response);

      setMovie(response.data);
    }

    fetchMovie();
  }, []);

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
