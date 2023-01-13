function liquid(fruta, liquido) {
  return `Suco de ${fruta} no ${liquido}`;
}

function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function maquinaDeLavar(cor) {
  if (cor !== "Preto" && cor !== "Branco" && cor !== "Colorida") {
    return "Coloração invalida, verifique sua roupa suja corretamente.";
  }

  return `Roupas ${cor} lavadas com sucesso!`;
}

console.log(maquinaDeLavar("Verde"));
console.log(maquinaDeLavar([]));
console.log(maquinaDeLavar("Preto"));

function nomeDaFunção(parametros) {
  // O funcionamento da maquina
}

function maquinaDeGelo() {
  console.log("Gelo");

  return "Oi";
}

console.log(maquinaDeGelo);
console.log("CONSOLE.LOG LINHA 30", maquinaDeGelo());

const gelo = maquinaDeGelo();

function alerta() {
  console.log("Você esta a muito tempo no computador.");
}

function sobrenome(str1, str2) {
  return "Alexandre" + " " + str2 + str1;
}

console.log(sobrenome("Lima", "Amaral"));

function calc(num1, num2, opr) {
  return opr(num1, num2);
}

console.log(calc(10, 5, sum));
console.log(calc(10, 5, sub));

function mult(num1, num2) {
  return num1 * num2;
}

console.log(calc(10, 5, mult));

function cozinha(comida1, comida2, metodo) {
  return metodo(comida1, comida2);
}

function fritadeira(alimento, baseParaFritar) {
  return `Seu ${alimento} está frito no ${baseParaFritar} e pronto para consumo.`;
}

function penelaDePressão(liquido, grão) {
  return `Seu ${grão} está cozido a pressão no ${liquido} e pronto para consumo.`;
}

console.log(cozinha("batata", "oleo", fritadeira));

function aumento(
  salarioAtual,
  inflação,
  callback,
  tempoDeEmpresa,
  nivelSenioridade
) {
  if (typeof callback !== "function") {
    throw new Error("Parametros incorretos");
  }

  const bonificacao = callback(tempoDeEmpresa, nivelSenioridade);

  return salarioAtual * inflação + bonificacao;
}

function bonificacaoDev(tempoDeEmpresa, nivelSenioridade) {
  return tempoDeEmpresa * nivelSenioridade;
}

function bonificacaoPM(tempoDeEmpresa, nivelSenioridade) {
  return tempoDeEmpresa + nivelSenioridade;
}

const aumentoBrenno = aumento(8000, 7, "batata", 3, 2);
const aumentoRafa = aumento(8000, 7, bonificacaoPM, 5, 3);

console.log(aumentoBrenno, aumentoRafa);
