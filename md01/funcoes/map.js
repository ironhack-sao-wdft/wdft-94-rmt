// MAP

const names = ["Alexandre", "Karen", "Carol"];

function upperCase(str) {
  return str.toUpperCase();
}

const newNames = names.map(upperCase);

console.log(newNames);

// METODO DE ARRAY
// RETORNA UM NOVO ARRAY E NÃO ALTERA O ARRAY ORIGINAL
// ELE INVOCA A CALLBACK QUE ELE RECEBER COMO PARAMENTRO PARA CADA ELEMENTO DO ARRAY

// upperCase("Alexandre")
// upperCase("Karen") ...

// ELE TEM UM LOOP INTERNO
// NO FINAL ELE VAI TE DAR UMA NOVA ARRAY ONDE ELE VAI ARMAZENAR TUDO QUE RETORNOU DAS CALLBACKS
// A ARRAY QUE O MAP RETORNA SEMPRE, SEMPRE, SEMPRE MESMO, ATE ALGUM INDIANO ME REFUTAR, A ARRAY DO MAP VAI TER O MESMO TAMANHO DO ARRAY ORIGINAL
// SE ELA NÃO TIVER OQ COLOCAR ALI, ELA VAI PREENCHER AQUELE ESPAÇO COM UNDEFINED
