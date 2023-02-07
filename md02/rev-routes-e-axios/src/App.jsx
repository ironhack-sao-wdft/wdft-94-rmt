import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MoviePage } from "./pages/MoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
