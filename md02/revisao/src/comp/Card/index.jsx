export function Card(props) {
  const { title, description, children } = props;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </>
  );
}
