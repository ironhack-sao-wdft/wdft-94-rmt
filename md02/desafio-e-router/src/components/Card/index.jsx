export function Card(props) {
  const { title, overview, attPosterStatus } = props;

  function handleTogglePoster() {
    attPosterStatus();
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <button onClick={handleTogglePoster}>Ver poster!</button>
    </div>
  );
}
