import { useState } from "react";
import { Button } from "./Button";
import { CardImg } from "./CardImg";
import Dog1 from "./dogimg.png";
import Dog2 from "./dogimg2.jpg";
import { TextBlock } from "./TextBlock";

export function Section() {
  const [img, setImg] = useState(Dog1);
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus turpis arcu, vel mattis nunc bibendum vitae."
  );

  function handleAttStates() {
    setImg(Dog2);
    setText("Mudei!");
  }

  return (
    <div>
      <CardImg srcImg={img} />
      <Button attStates={handleAttStates} />
      <TextBlock>{text}</TextBlock>
    </div>
  );
}
