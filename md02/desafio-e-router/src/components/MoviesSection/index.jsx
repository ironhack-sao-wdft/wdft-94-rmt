import movies from "../../assets/movies";
import { Card } from "../Card";
import { Poster } from "../Poster";

export function MoviesSection() {
  const moviesAtt = movies.map((currentMovie) => {
    return { ...currentMovie, showPoster: false };
  });

  return (
    <>
      <h1>Movies Section</h1>

      {moviesAtt.map((currentMovie) => {
        return (
          <div>
            <Card
              title={currentMovie.original_title}
              overview={currentMovie.overview}
              attPosterStatus={() => {
                currentMovie.showPoster = !currentMovie.showPoster;
              }}
            />
            <Poster
              imageSrc={currentMovie.backdrop_path}
              showStatus={currentMovie.showPoster}
            />
          </div>
        );
      })}
    </>
  );
}
