import Dog from "../../assets/images/dog.avif";
import style from "./style.module.css";

export function Card() {
  const altText = "Foto de cachorro";

  return (
    <div>
      <img src={Dog} alt={altText} className={style.exemplo} />
      <strong>Dog bonitin</strong>
    </div>
  );
}
