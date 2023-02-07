import { Route, Routes } from "react-router-dom";
import { MoviePage } from "./components/MoviePage";
import { MoviesSection } from "./components/MoviesSection";
import { Navbar } from "./components/Navbar";
import { OutraPagina } from "./components/OutraPagina";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesSection />} />
        <Route path="/outra-pagina" element={<OutraPagina />} />
        <Route path="/movie/:movieID" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
