// Create an array from which the computer will choose - list of National Parks
var options = ["grand canyon", "yosemite", "zion", "isle royale", "mesa verde", "glacier bay", 
"sequoia", "glacier", "arches", "grand teton", "badlands", "joshua tree", "rocky mountain", 
"bryce canyon", "yellowstone", "great sand dunes", "death valley", "mammoth cave"];

// Make the computer choose from that array.

// Global Variables - options array, park, userguess, wins, loss, guessedLetters, lives


var answerArray = [];

var userguess = [];

var lives = 12;

var wins = 0;

var guessedLetters = [];

var currentWord = document.getElementById("currentWord");

document.addEventListener("DOMContentLoaded", function(event) { 
    var computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);
    for (var i = 0; i < computerGuess.length; i++) {
        answerArray[i] = "_";
        console.log(answerArray);
        currentWord.textContent = answerArray;
    }
});

// document.onkeyup = function(event) {
    

//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   


// }

// var blanksLeft = 

// on key up - pull a random word, display as underscores, 
// get user's input, (key event), 
    //compare user guess to park,
    //if doesn't match, userGuess goes to guessed letters, lives-- 
//if userGuess does match, it fills in the blank of the word (letter appears)



//reset - will be at the end.  


// document.onkeyup() {

// }



// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// var remainingLetters = option.length;
// var gameStarted = false;
// var hasFinished = false;

// function resetGame() {
//     lives = maxTries;
//     gameStarted = false;

//     option = options[Math.floor(Math.random() * options.length)];

//     guessedLetters = [];
//     answerArry = [];

//     
//     };

//     updateDisplay();
// }

// function updateDisplay() {
//     document.querySelector('#lives').innerHTML = "Lives | " + lives;
//     document.querySelector('#wins').innerHTML = "Wins | " + wins;
//     for (var i = 0; i < option.length; i++) {
//         document.querySelector('#currentWord').innerText += answerArray[i];
//     }
// }



// // While lives > 0 , show the player their current progress & get a guess from the player


// While (lives > 0); {

//     document.onkeyup = function() {
//         console.log(userguess);          
//     }
// }

// // String.fromCharCode(event.keyCode).toLowerCase();
   


// // for (var j = 0; j < currentWord.length; j++) {
//     //     if (currentWord[j] === userguess) {
//     //         answerArray[j] = userguess;
//     //     }else {
//     //         $("#guessedLetters").append(userguess);
//     //     }
//     // }
// //          If the guess isn't a letter, tell the player to choose a letter
// //              Else If the guess doesn't match a letter in the word, subtract a life and add userGuess to Guessed Letters
//                 // Else  the guess is in the word, update player's progress (make letter appear).




 