import { useState } from "react";
import { Button } from "../Button";
import { CTA } from "../CTA";

export function Counter() {
  const [counter, setCounter] = useState(0);
  function acres() {
    setCounter(counter + 1);
  }

  const decres = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <CTA>{counter}</CTA>

      <Button color="blue" onClick={acres}>
        +
      </Button>
      <Button color="orange" onClick={decres}>
        -
      </Button>
    </>
  );
}
