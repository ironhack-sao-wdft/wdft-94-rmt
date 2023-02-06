import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/form">
        <button>Form</button>
      </Link>
    </>
  );
}
