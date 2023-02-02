// export function Exemplo(props) {
//   const { isCute } = props;

//   return (
//     <div>
//       {isCute ? (
//         <strong>Ale, vc é muito fofo.</strong>
//       ) : (
//         <strong>Karen, CALMA!</strong>
//       )}
//     </div>
//   );
// }

// export function Exemplo(props) {
//   const { tutor } = props;

//   return (
//     <div>
//       {tutor === "Alexandre" ? (
//         <strong>Ale, vc é muito fofo.</strong>
//       ) : (
//         <strong>Karen, CALMA!</strong>
//       )}
//     </div>
//   );
// }

export function Exemplo(props) {
  const { isCute, tutor } = props;

  return (
    <div>{isCute && tutor === "Alexandre" && <p>Ale é muito fofo.</p>}</div>
  );
}

// CONDIÇÃO ? SE FOR TRUE, FAÇO ISSO : SE FOR FALSE, FAÇO ISSO

// if (condição) {
//se for true
//} else {
//    se for false
//}
