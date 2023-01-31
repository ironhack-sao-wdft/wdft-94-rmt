import style from "./style.module.css";

export function Button(props) {
  function algumaCoisa() {
    console.log("Alguma coisa");
  }

  return (
    <button onClick={algumaCoisa} className={style[props.class]}>
      {props.children}
    </button>
  );
}
