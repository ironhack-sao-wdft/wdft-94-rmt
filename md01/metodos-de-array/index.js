// Metodos de array

// MAP FILTER e SORT

// TODOS ELES RECEBEM UM CALLBACK

// const arr = []

// arr.map(vou ter que passar uma function aqui) ;

// FOREACH e REDUCE

// MAP

// const arr = [
//   { name: "Alexandre", age: 26, isCute: true },
//   { name: "Carol", age: 35, isCute: true },
//   { name: "Karen", age: undefined, isCute: false },
// ];

// const newArr = arr.map((currentElement) => {
//   return { ...currentElement, age: currentElement.age + 1 };
// });

// console.log(newArr);

// const currentElement = { name: "Alexandre", age: 26, isCute: true };
// const currentElement2 = { name: "Carol", age: 35, isCute: true };

// const newElement = { ...currentElement, ...currentElement2 };

// console.log(newElement);

const arr = [
  { name: "Alexandre", age: 26, isCute: true, formacao: ["Direito", "ADM"] },
  { name: "Carol", age: 35, isCute: true },
  { name: "Karen", age: undefined, isCute: false },
];

const arr2 = [
  { name: "Alexandre", age: 26, isCute: true },
  { name: "Karen", age: 16, isCute: false },
  { name: "Carol", age: 35, isCute: true },
];

const newArr = [...arr, ...arr2];

// console.log(newArr);

const addFormation = arr.map((currentElement) => {
  if (!currentElement.formacao) {
    return { ...currentElement, formacao: ["Bootcamp WebDev Ironhack"] };
  }

  return currentElement;
});

console.log(addFormation);

// FILTER!

const onlyOldGuys = arr2.filter((currentElement) => {
  return currentElement.age >= 18;
});

console.log(onlyOldGuys);

// SORT

arr2.sort((a, b) => {
  return a.age - b.age;
});

arr2.sort((a, b) => {
  return b.name.localeCompare(a.name);
});

console.log(arr2);
