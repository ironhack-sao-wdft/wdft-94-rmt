export function Card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button>{props.CTA}</button>
    </div>
  );
}
