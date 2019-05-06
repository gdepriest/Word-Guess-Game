// Create an array from which the computer will choose - list of National Parks
var options = ["grand canyon", "yosemite", "zion", "isle royale", "mesa verde", "glacier bay", 
"sequoia", "glacier", "arches", "grand teton", "badlands", "joshua tree", "rocky mountain", 
"bryce canyon", "yellowstone", "great sand dunes", "death valley", "mammoth cave"];


// Make the computer choose from that array.

var option;
var answerArray = [];
var currentWord = document.querySelector('#currentWord');

// Make the computer hide the letters.



var wins = 0;

var guessedLetters = [];

const maxTries = 12

var lives = 0;


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var remainingLetters = option.length;
var gameStarted = false;
var hasFinished = false;

function resetGame() {
    lives = maxTries;
    gameStarted = false;

    option = options[Math.floor(Math.random() * options.length)];

    guessedLetters = [];
    answerArry = [];

    for (var i = 0; i < option.length; i++) {
        answerArray.push("_");
    };

    updateDisplay();
}

function updateDisplay() {
    document.querySelector('#lives').innerHTML = "Lives | " + lives;
    document.querySelector('#wins').innerHTML = "Wins | " + wins;
    for (var i = 0; i < option.length; i++) {
        document.querySelector('#currentWord').innerText += answerArray[i];
    }
}



// While lives > 0 , show the player their current progress & get a guess from the player


While (lives > 0); {

    document.onkeyup = function() {
        var userguess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userguess);          
    }
}


   


// for (var j = 0; j < currentWord.length; j++) {
    //     if (currentWord[j] === userguess) {
    //         answerArray[j] = userguess;
    //     }else {
    //         $("#guessedLetters").append(userguess);
    //     }
    // }
//          If the guess isn't a letter, tell the player to choose a letter
//              Else If the guess doesn't match a letter in the word, subtract a life and add userGuess to Guessed Letters
                // Else  the guess is in the word, update player's progress (make letter appear).




 