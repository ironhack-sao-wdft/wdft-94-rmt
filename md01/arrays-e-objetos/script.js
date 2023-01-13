const foodList = [
  "Arroz",
  "Macarrão",
  "Feijão",
  "Macarrão",
  "Molho de tomate",
  "Macarrão",
  "Leite condensado",
];

console.log(foodList);

// POP

foodList.pop();

// PUSH <<<<<<<<<

foodList.push("Miojão", "Sucrilho");

console.log(foodList);

// SHIFT

foodList.shift();

console.log(foodList);

// UNSHIFT

foodList.unshift("Batata");

console.log(foodList);

const todo = [];
const done = [];

function findFood(foodName) {
  const foodIndexes = [];

  for (let i = foodList.length - 1; i >= 0; i--) {
    if (foodList[i] === foodName) {
      console.log(i);
      foodIndexes.push(i);
    }
  }

  return foodIndexes;
}

console.log(findFood("Macarrão"));

const macarraoIndexes = findFood("Macarrão");

console.log(macarraoIndexes);

const newArr = ["Alexandre", "Paulo", "Matheus"];

const arr2 = ["Danilo", "Pedro", newArr.pop()];

console.log(newArr);
console.log(arr2);

// Objetos!

const obj = {
  key: "value",
  num: 10,
  boo: false,
  arr: [10, { meuDeusDoCeuOqEstaAcontecendo: "Scorro!" }],
  func: function test() {},
  obj: {},
};

// DOT NOTATION - QUANDO A GENTE JÁ SABE QUAL A CHAVE A GENTE QUER ACESSAR
console.log(obj.num);

const str = "key";

console.log(obj.arr[1].meuDeusDoCeuOqEstaAcontecendo);

// OBJ > OBJ

const cadastro = {
  name: "Alexandre",
  cpf: "999999999-99",
  address: {
    street: "Rua dos bobos",
    number: 0,
    zipCode: "777777-77",
  },
  orders: ["Moedor de café", "Café", "Filtro para v60", "Balança"],
};

console.log(cadastro.address.number);

console.log(cadastro.orders[cadastro.orders.length - 1]);

const cohorts = [
  ["Karen", "Rita", "Lari"],
  ["Pri", "Gian", "Nicolas"],
  ["Daniel", "Jino", "Bruno", "Eliel"],
  ["Carol", "Zih", "Lari"],
  ["Felipe", "Karine", "Pedro"],
];

console.log(cohorts[1][2]);

cohorts[2].splice(2, 0, "Caio", "Adriano");

console.log(cohorts);

for (let i = 0; i < cohorts.length; i++) {
  for (let j = 0; j < cohorts[i].length; j++) {
    cohorts[i][j] += " Silva";
  }
}

console.log(cohorts);
