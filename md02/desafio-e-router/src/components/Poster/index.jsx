export function Poster(props) {
  const { imageSrc } = props;

  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${imageSrc}`}
      alt="Poster do filme"
    />
  );
}
