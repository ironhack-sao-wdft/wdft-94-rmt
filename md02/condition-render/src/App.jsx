import { useState } from "react";
import { Card } from "./Card";
import movies from "./movies";
import { Section } from "./Section";

function App() {
  const [text, setText] = useState("Bom dia");

  return (
    <div className="App">
      {/* <CompTexto text={text} />
      <CompButton setText={setText} />
      <Exemplo tutor="Carol" isCute={true} /> */}

      <Section />

      {movies.map((currentMovies) => {
        return (
          <Card
            title={currentMovies.original_title}
            text={currentMovies.overview}
            CTA="Clique aqui!"
          />
        );
      })}
    </div>
  );
}

export default App;
