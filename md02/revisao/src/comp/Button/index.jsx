export function Button(props) {
  const { children, color, onClick } = props;

  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
}
