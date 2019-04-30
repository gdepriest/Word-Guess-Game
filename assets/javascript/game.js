// Create an array from which the computer will choose - list of National Parks
// Make the computer choose from that array.
// Make the computer hide the letters.
var options = ["Grand Canyon", "Yosemite", "Isle Royale", "Mesa Verde", "Glacier Bay", "Rocky Mountain", "Bryce Canyon", "Yellowstone"]
var currentWord = options[Math.floor(Math.random()*options.length)];
// User makes a choice.
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode). toLowerCase();

    console.log(userguess);
}
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
