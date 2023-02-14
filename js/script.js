// 1. Generare 5 numeri casuali tramite funzione "get5RandomNumbers"
const numbers = get5RandomNumbers();

// 2. Visualizzare i 5 numeri generati tramite all'alert
// Si poteva utilizzare il "metodo .join(', ')" degli Array per trasformarli in una Stringa
let stringNumbers = tranfromNumbersIntoString(numbers);

alert(`I NUMERI ESTRATTI sono: ${stringNumbers}`);

// 3. Attendere 30 secondi prima dell'esecuzione della Funzione "getNumbersUserForCheck()"
setTimeout(getNumbersUserForCheck, 30000);





// *****************************
// function "tranfromNumbersIntoString" - Crea una Stringa partendo da un Array di numeri
// ******************************

function tranfromNumbersIntoString(arrayNumbers) {
  let stringNumbers = '';

  for (let i = 0; i < arrayNumbers.length; i++) {
    stringNumbers += ` ${arrayNumbers[i]} `;
  }
  return stringNumbers;
}

// *****************************
// function "get5RandomNumbers" - Crea un Array di 5 numeri casuali da 1 a 100
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

// *********************************
// function "getNumbersUserFromPrompt" - Crea un Array di 5 numeri (compresi da 1 a 100) a chiesto a Utente
// *********************************

function getNumbersUserFromPrompt(quantity){
  let = numbersPrompt = [];
  let count = 0;

  while (count !== quantity){
    const number = parseInt(prompt("inserisci il un numero ;)"));
    // if (isNaN(number) === false && (number >= 1 && number <=100)){
      numbersPrompt.push(number);
      count ++;
    // }
  }

  return numbersPrompt;
}

// *****************************
// function "getNumbersUserForCheck" - Funzione che confronta Numeri Casuali con quell inseriti da Utente
// ******************************

function getNumbersUserForCheck(){
  // Creo Array per tenere traccia dei numeri indovinati e un contatore per capire quanti numeri sono stato indovinati
  let numbersFound = [];
  // Avendo un Array di Numeri Indovinati, il contatore è superfluo --> al suo posto si può usare ".lenght" 
  let count = 0;

  // Invoco Funzione per chiedere tot numeri a Utente
  const numbersUser = getNumbersUserFromPrompt(5);

  console.log(numbers);
  console.log(numbersUser);

  // Creo doppio Ciclo per confrontare tutti gli elementi di "arrayNumbers" con tutti gli elementi di "numberUser"
  // Un'alternativa era quella di fare il controllo all'inserimento dei numeri da Prompt usando ".includes"
  for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbersUser.length; j++){
      // Devo controllare che l'Utente non faccia il furbo inserimento lo stesso numero più volte  
      if (numbers[i] === numbersUser[j] && numbersFound.includes(numbers[i]) === false){
        numbersFound.push(numbers[i]);
        count++;
      }
    }
  }

  const stringNumbersFound = tranfromNumbersIntoString(numbersFound);

  if (count === 0){
    console.log('Non hai indovinato nessun numero ;(');
  } else {
    console.log(`Complimenti! Hai indovinato ${count} numeri:${stringNumbersFound};)`);
  }


}