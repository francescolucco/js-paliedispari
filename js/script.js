// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let wordUser = prompt('Inserisci una parola');
console.log(wordUser);
let parolapalindroma = palindromo(wordUser);

function palindromo(word){
  let wordReverse = word.split("").reverse().join("");
  
  if (word === wordReverse) {
    console.log("The string is a palindrome");
  } else {
    console.log("NOT a palindrome");
  }
}


// **Pari e Dispari**
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Utente inserisce 'pari' o 'dispari'.
let pariODispari = prompt('Mi dici per favore pari o dispari?');
console.log('Hai scelto: ', pariODispari);


// Utente inserisce un numero da 1 a 5
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
if(numeroUtente > 5){
  alert('Il numero inserito non è valido! Inserisci un nuovo numero compreso tra 1 a 5');
}
console.log('Hai scelto il numero: ', numeroUtente);


// Il computer genera un numero random da 1 a 5
let numeroRandom = getRandomNumber(1, 5);

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('Il computer ha estratto: ', numeroRandom);


// Sommiamo i due numeri
let somma = sommaDueNuemri(numeroUtente, numeroRandom);

function sommaDueNuemri(num1, num2){
  let sommaX = (num1 + num2);
  return sommaX;
}
console.log('La somma è: ', somma);


// Stabiliamo se la somma è pari o dispari
let dispariOPari = getPariODispari(somma);

function getPariODispari(num){
  if (num % 2 === 0) {
    console.log("La somma è pari");
  } else {
    console.log("La somma è dispari");
  }
}

// Dichiariamo chi ha vinto
let esitoMatch = esitoFinaleMatch(pariODispari, somma);

function esitoFinaleMatch(vittoria, sommatot){
  if (vittoria === "pari" && sommatot % 2 === 0) {
    console.log("Hai vinto");
  } else if(vittoria === "dispari" && sommatot % 2 !== 0) {
    console.log("Complimenti! Hai vinto!");
  } else {
    console.log('Ci dispiace, hai perso!');
  }
}




