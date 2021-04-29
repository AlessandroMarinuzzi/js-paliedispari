// 2-Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var userChoice = prompt("Choose odd or even!").toLocaleLowerCase();
console.log(userChoice);

var userNumber = Number(prompt("Choose a nuber between 1 and 5!"));
console.log(userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
var pcNumber = numRandom(1,5)
console.log(pcNumber);
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var sum = userNumber + pcNumber;

function isEven(value) {
	if (value%2 == 0)
		return "even";
	else
		return "odd";
}
// Dichiariamo chi ha vinto.
var result = isEven(sum)
console.log(result);

if (result === userChoice){
    console.log("You Won!");
} else {
    console.log("You Lost!");
}