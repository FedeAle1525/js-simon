// 1. Generare 5 numeri casuali tramite funzione "get5RandomNumbers"
const numbers = get5RandomNumbers();

// 2. Visualizzare i 5 numeri generati tramite all'alert
let stringNumbers = '';

for (let i = 0; i < numbers.length; i++){
  stringNumbers += ` ${numbers[i]} `;
}

alert(`I NUMERI ESTRATTI sono: ${stringNumbers}`);

// 3. Attendere 30 secondi prima dell'esecuzione della Funzione "getNumbersUser()"








// *****************************
// function "get5RandomNumbers"
// ******************************

function get5RandomNumbers (){
  let randomsNumbers = [];
  let number;

  while(randomsNumbers.length !== 5){
    number = Math.floor(Math.random() * (100) + 1);

    if(randomsNumbers.includes(number) === false){
      randomsNumbers.push(number);
    }
  }

  return randomsNumbers;
}

// *****************************
// function "get5RandomNumbers"
// ******************************

function getNumbersUser(){
  const number1 = parseInt(prompt("inserisci il primo numero ;)"));
  const number2 = parseInt(prompt("inserisci il secondo numero ;)"));
  const number3 = parseInt(prompt("inserisci il terzo numero ;)"));
  const number4 = parseInt(prompt("inserisci il quarto numero ;)"));
  const number5 = parseInt(prompt("inserisci il quinto numero ;)"));
}