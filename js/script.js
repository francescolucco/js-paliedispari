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
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Utente inserisce 'pari' o 'dispari'.
// let pariODispari  prompt('Mi dici per favore pario dispari?');

// // Utente inserisce un numero da 1 a 5
// let numeroUtente = prompt('Inserisci un numero da 1 a 5');

// // Il computer ci da indietro un numero random da 1 a 5
// let numeroRandom = getNumeroRandomDa1a5();

// // Sommiamo i due numeri
// let somma = sommaDueNuemri(num1, num2);

// function getNumeroRandomDa1a5(){

// }

// function sommaDueNuemri(num1, num2){

// }