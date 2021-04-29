// 1. Palidroma:
// Chiedere all’utente di inserire una parola 
var userWord = prompt("Type a word").toLowerCase("");
console.log(userWord);



// Creare una funzione per capire se la parola inserita è palindroma
function checkPalindromes(userWord){
    // convert string to array
    var splittedWord = userWord.split("");
    console.log(splittedWord);
    // reverse the array order
    var reverseWord = splittedWord.reverse("")
    console.log(reverseWord);
    // convert array to string
    var palindrome = reverseWord.join("")
    console.log(palindrome);

    if (userWord == palindrome){
        console.log("Palindrome!");
    } else {
        console.log("Not a palindrome!");
    }
}

console.log(checkPalindromes);
