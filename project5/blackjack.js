"use strict";

const cards =  ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const cardType = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
const startGame = document.querySelector(".start-btn");
const hitBtn = document.querySelector(".hit-btn");
const playerCardContainer = document.querySelector('#player-card-container');
const compCardContainer =document.querySelector('#computer-card-container');
const playerScoreText = document.querySelector(".player-card-score");
const compScoreText = document.querySelector(".computer-card-score");
let playerArr = [];
let compArr = [];
let playerTurn = true;
let turn = 1;
let playerScore = 0;
let compScore = 0;


// Reset game
function resetGame() {
    playerArr = [];
   compArr = [];
  playerTurn = true;
  turn = 1;
  playerScore = 0;
  compScore = 0;
}
//  Generate random numbers
function generateNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random card
function generateCard () {
    let randomCardNum = cards[generateNum(0,12)];
    let randomCardSuit = cardType[generateNum(0,3)];
    if(turn === 1){
        playerArr.push(cards[generateNum(0,12)]);
        playerArr.push(cards[generateNum(0,12)]);
        computerTurn(cards[generateNum(0,12)]);
        computerTurn(cards[generateNum(0,12)]);
        winCondition(playerArr);
        winCondition(compArr);
        turn++;
    }else  if(playerTurn) {
        playerArr.push(randomCardNum);
        playerTurn = false;
        computerTurn(cards[generateNum(0,12)]);
    } else {
        computerTurn(randomCardNum)
        playerTurn = true;
    }
    //console.log(`Card Number: ${randomCardNum} Card Suit: ${randomCardSuit}`);
    console.log(`Player Array:  ${playerArr}
Computer Array: ${compArr}`);

winCondition(playerArr);
winCondition(compArr);
}

// Computer Turn
function computerTurn(num){
    if(turn === 1){
        compArr.push(num);
    }else if(compArr.reduce(function (a, b){ return a + b;}, 0) < 17){
        compArr.push(num);
        playerTurn = true;
    }else {
        console.log("Computer Stands");
    }
}

// check to see if someone has won
function winCondition(arr) {
    let total;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === "K" || arr[i] === "Q" || arr[i] === "J") {
            arr[i] = 10;
        } else if ( arr[i] === "A"){
            if(total + 11 <= 21){
                arr[i] = 11;
            }else {
                arr[i] = 1;
            }
        }

        total = arr.reduce(function (a, b){ return a + b;}, 0);

        if(playerTurn){
            playerScore = total;
        } else {
             compScore = total;
        }

        if(playerScore === 21 && playerTurn){
            console.log("21, You win!");
        }else if ( playerScore > 21 && playerTurn) {
            console.log(` ${playerScore} is over 21. You lose!`);
        }

        if(compScore === 21 && playerTurn == false){
           console.log("21, Computer wins!");
       }else if (compScore > 21&& playerTurn == false) {
           console.log(` ${compScore} is over 21. Computer loses!`);
       }
       console.log(compScore);
       console.log(playerScore);
    }
}

// Start Button Click Function
startGame.addEventListener("click", function () {
    resetGame();
    generateCard();
});

// Hit button Click function
hitBtn.addEventListener("click", function () {
    generateCard();
});
