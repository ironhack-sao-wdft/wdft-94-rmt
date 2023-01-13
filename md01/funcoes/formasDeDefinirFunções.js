// "Tradicional"

function nomeDaFunction(parametros) {
  // corpo da função
}

// Arrow Function

const nomeDaFunc = (pametros) => {
  // corpo da function
};

// One line arrow function

// Isso aqui:

// const nomeDaFunc2 = () => "Banana"

// É basicamente igual a isso aqui:

// // function nomeDaFunc2 () {
// //     return "Banana"
// // }

// Funções anonimas

const arr = ["Ale", "Karen", "Carol"];

const newArr = arr.map(function (currentElement) {
  return currentElement.toUpperCase();
});

console.log(newArr);

const newArr2 = arr.map((currentElement) => {
  return currentElement.toUpperCase();
});

const newArr3 = arr.map((currentElement) => currentElement.toUpperCase());
