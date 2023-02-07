import { useState } from "react";
import movies from "../../assets/movies";
import { Card } from "../Card";
import { Poster } from "../Poster";

export function MoviesSection() {
  const [posterToShow, setPosterToShow] = useState(undefined);
  // const [posterToShow, setPosterToShow] = useState([]);

  function handleShowPoster(movieIndex) {
    setPosterToShow(movieIndex);
  }

  // function handleShowPoster(movieIndex) {
  //   if (posterToShow.includes(movieIndex)) {
  //     console.log(posterToShow.slice(posterToShow.indexOf(movieIndex), 0));

  //     setPosterToShow(posterToShow.slice(posterToShow.indexOf(movieIndex), 1));
  //   } else {
  //     setPosterToShow([...posterToShow, movieIndex]);
  //   }
  // }

  return (
    <>
      <h1>Movies Section</h1>

      {movies.map((currentMovie, i) => {
        return (
          <div className="d-flex">
            <Card
              title={currentMovie.original_title}
              overview={currentMovie.overview}
              handleShowPoster={handleShowPoster}
              movieIndex={i}
              movieId={currentMovie.id}
            />

            {posterToShow === i && (
              <Poster imageSrc={currentMovie.backdrop_path} />
            )}
          </div>
        );
      })}
    </>
  );
}
