
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var wrongGuesses = [];

var random = Math.floor(Math.random() * letters.length);

document.onkeyup = function(event) {
    var userGuess = event.key;

    if (userGuess == random) {
        wins++;
        alert("You guessed it!")
    }
    if (userGuess !== random) {
        guessesLeft--;
        wrongGuesses.push(userGuess);
    }
    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        wrongGuesses = [];
        alert("You Lose!")
    }

    var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + wrongGuesses + "</p>";
    
    document.querySelector("#Game").innerHTML = html;
}