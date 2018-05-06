// first create my array//

//var names=" ed, smee, mushu, flounder,baloo, jafar"
const maximum = 6; //total amount of turns 
const names=['ed', 'baloo', 'jafar'];
var randomNumber = Math.floor(Math.random() * names.length);
var choosenName = names[randomNumber];
var guessingWord= [];   //stores letters that have  been guessed already
var guesses = [];      // Stored letter geusses
var remainingGuesses= 0;         // tries left
var start= false;       // game has started
var endGame= false;     // try again
var currentWordIndex;   //stores guessed word 
var totalWins = 0;      //total wins of the player         

//start code//

function resetGame() {
    remainingGuesses= maximum;
    start=false;

    var randomNumber= Math.floor(Math.random() * names.length);
        console.log(choosenName);

        LettersGuessed= [];
        guessingWord= []; 
    
    for (var i=0; i< names[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }    
};

    console.log(resetGame);
function updateDisplay() {

    document.getElementById("Totalwins").innerText= Wins;
    document.getElementsById("currentWord").innerText="";
    for (var i=0; i<guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord [i];

    }
    document.getElementById("lives").innerText= lives[i];
    document.getElementById("Guesses").innerText= Guesses[i];
        if ("lives" <=0) {
        }

};

console.log(updateDisplay);

document.onkeydown= function (event) {
    if(endGame) {
        resetGame();
        endGame=false;
    } else {
        if(event.keyCode>=65 && event.keyCode <=90) {
            makeGuess(event.key.toLowerCase());

        }
    }
};

function makeGuess (letter) {
    if(lives >0) {
        if(!start) {
            start=true;
        }
        if (Guesses.indexOf(letter) === -1){
            Guesses.push(letter);
            evaluateGuess(letter);
        }
    }
        console.log(updateDisplay);
        console.log(CheckWin);
};

function evaluateGuess(letter) {
    var positions= [];
    for(var i=0; i< names[currentWordIndex].length; i++) {
        if (names[currentWordIndex][i]=== letter) {
            positions.push(i);
        }
    }
if (positions.length<=0) {
    lives--;
} else {
    for(var i=0; i<positions.length; i++) {
        guessingWord[positions[i]] =letter;
        }
    }
};

function CheckWin() {
    if(guessingWord.indexOf("_") ===-1) {
        wins++;
        endGame= true;
    }
};



// check if guess is right
//if right push to right array//

//if wrong push to wrong array// () => {
    console.log(choosenName);
