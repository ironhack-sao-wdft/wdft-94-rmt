console.log("Oi!");

const name = "Carimbo";

// TA ERRADO
// console.log(age);

// name = "Fred";

console.log(name);

let age = 26;

age = 27;

// Strings

let dog = "Tyrion";

let exemplo = `O nome do meu cachorro é ${dog}`;

console.log(exemplo.toUpperCase());
console.log(exemplo);

console.log(exemplo.length);

dog = "Max";

exemplo = `O nome do meu cachorro é ${dog}`;

console.log(exemplo);

let dogName = "mark";
let dogNameUpper = dogName.toUpperCase();

console.log(dogNameUpper);

const num1 = "1";
const num2 = "2";

console.log(num1 + num2);

// Numbers

const num = 50;

const num3 = 3;

console.log(num2 - num3);

console.log(true + 1);

console.log(exemplo.length + num);

// exemplo.toUpperCase().length

// Booleans

const isVeagan = true;

// Se o prato for vegano, coloque o selo de Vegan

// if (condição > true ou false) {
//     se for true, executa o que ta aqui dentro
// }

if (isVeagan) {
  console.log("Prato vegano!");
}

const ageAle = 15;

if (!(ageAle >= 18)) {
  console.log("Menor de idade!");
}

// >
// <
// >=
// <=
// ==
// ===
// !=
// !==

const exp1 = "1";
const exp2 = 1;

console.log(exp1 === exp2);

const souConfiavel = "dasiuhygdygihasiguydayisg";
const naoSouConfiavel = "";

if (naoSouConfiavel) {
  console.log("Eu creio, brow!");
}

const str = "Alexandre";

for (let i = 0; i < str.length; i++) {
  if (
    str[i].toLowerCase() === "a" ||
    str[i].toLowerCase() === "e" ||
    str[i].toLowerCase() === "i"
  ) {
    console.log("Vogal");
  } else {
    console.log("Consoante");
  }
}
