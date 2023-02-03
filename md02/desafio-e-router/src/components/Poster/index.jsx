import { useState } from "react";

export function Poster(props) {
  const { imageSrc, showStatus } = props;

  const [render, setRender] = useState(showStatus);

  return (
    <>
      {render && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${imageSrc}`}
          alt="Poster do filme"
        />
      )}
    </>
  );
}
