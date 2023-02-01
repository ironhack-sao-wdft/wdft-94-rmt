import Dog2 from "./dog.jpg";
import Dog1 from "./dog1.jpg";

import { useState } from "react";

export function Exemplo2() {
  const [img, setImage] = useState(Dog1);

  function handleChangeImage() {
    if (img === Dog1) {
      setImage(Dog2);
    } else {
      setImage(Dog1);
    }
  }

  return <img src={img} alt="Dog" onClick={handleChangeImage} />;
}
