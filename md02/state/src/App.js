import { useState } from "react";
import { Exemplo2 } from "./Exemplo2";

function App() {
  console.log(useState("Alexandre"));

  const [counter, setCounter] = useState(0);
  console.log(counter);

  // let counter = 0;

  function add() {
    setCounter(counter + 1);
  }

  function sub() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <strong>{counter}</strong>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>

      <Exemplo2 />
    </div>
  );
}

export default App;
