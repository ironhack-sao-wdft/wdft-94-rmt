import { Link } from "react-router-dom";

export function Card(props) {
  const { title, overview, handleShowPoster, movieIndex, movieId } = props;

  return (
    <div>
      <Link to={`/movie/${movieId}`}>
        <h1>{title}</h1>
      </Link>
      <p>{overview}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleShowPoster(movieIndex);
        }}
      >
        Ver poster!
      </button>
    </div>
  );
}
