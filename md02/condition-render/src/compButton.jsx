export function CompButton(props) {
  function handleButton() {
    props.setText("Boa tarde");
  }

  return <button onClick={handleButton}>Clique aqui para mudar o texto</button>;
}
