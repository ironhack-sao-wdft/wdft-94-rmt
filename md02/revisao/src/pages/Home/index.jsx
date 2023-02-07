import { Button } from "../../comp/Button";
import { Card } from "../../comp/Card";
import { Counter } from "../../comp/Counter";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button color="black" />
      <Button color="blue" />

      <Button color="red">Compre agora</Button>

      <Card title="Card 1" description="dahudhuisaduhasudhia" />
      <Card title="Card 2">hbisahdisadgsadgy</Card>

      <Card
        title="Passando um componente como props no children"
        description="Estou passando o componente Button como children desse card"
      >
        <Button color="brown">Texto</Button>
      </Card>
      <div></div>

      <Counter />
    </>
  );
}
