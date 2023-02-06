import { Route, Routes } from "react-router-dom";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
