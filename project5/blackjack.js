"use strict";

const cards =  ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const cardType = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
const startGame = document.querySelector(".start-btn");
const hitBtn = document.querySelector(".hit-btn");
const playerCardContainer = document.querySelector('#player-card-container');
const compCardContainer =document.querySelector('#computer-card-container');
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
  playerCardContainer.innerHTML = `<div class="player-card-score">${playerScore}</div>`;
  compCardContainer.innerHTML = `<div class="computer-card-score">${compScore}</div>`;
}
//  Generate random numbers
function generateNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameScore() {
    //console.log("player ", playerArr, playerScore);
    //console.log("computer ", compArr, compScore);
     document.querySelector(".computer-card-score").innerHTML =   `${compScore}`;
     document.querySelector(".player-card-score").innerHTML =  `${playerScore}`;
}

// Creates card structure
function makeCard(arr, container,  cardNum) {
    arr.push(cardNum);
    container.innerHTML += `<div class="player-card card">
        <p class="card-value card-value--pull-left">${cardNum}</p>
        <p class="card-class">${cardType[generateNum(0,3)]}</p>
        <p class="card-value card-value--pull-right">${cardNum}</p>
    </div>`
}

// Computer Turn
function computerTurn(num, card){
    if(turn === 1){
        //compArr.push(num);
        makeCard(compArr, compCardContainer, num);
        winCondition(compArr);
    }else if(compArr.reduce(function (a, b){ return a + b;}, 0) < 17){
        //compArr.push(num);
        makeCard(compArr, compCardContainer, num);
        winCondition(compArr);
        playerTurn = true;
    }else {
        console.log("Computer Stands");
    }
}

// Generate random card
function generateCard () {
    let randomCardNum = cards[generateNum(0,12)];
    let randomCardSuit = cardType[generateNum(0,3)];

    if(turn === 1){
        makeCard(playerArr, playerCardContainer, cards[generateNum(0,12)]);
        makeCard(playerArr, playerCardContainer, cards[generateNum(0,12)]);
        winCondition(playerArr);
        computerTurn(cards[generateNum(0,12)]);
        computerTurn(cards[generateNum(0,12)]);
        turn++;
    }else  if(playerTurn) {
        makeCard(playerArr, playerCardContainer, cards[generateNum(0,12)]);
        winCondition(playerArr);
        playerTurn = false;
        computerTurn(cards[generateNum(0,12)]);
    } else {
        computerTurn(randomCardNum);
        winCondition(compArr);
        playerTurn = true;
    }
    //console.log(`Card Number: ${randomCardNum} Card Suit: ${randomCardSuit}`);
    console.log(`Player Array:  ${playerArr}
Computer Array: ${compArr}`);
}

// check to see if someone has won
function winCondition(arr) {
    function total(arr){
        return arr.reduce(function (a, b){ return a + b;});
    }

    if(playerTurn){
        playerScore = total(arr);
    } else {
         compScore = total(arr);
    }

    // Aces arent working properly
    console.log(total(arr), "TOTAL");
        for (let i = 0; i < arr.length; i++){
            if(arr[i] === "K" || arr[i] === "Q" || arr[i] === "J") {
                arr[i] = 10;
            } else if ( arr[i] === "A"){
                if(total(arr) <= 10){
                    arr[i] = 11;
                }else {
                    arr[i] = 1;
                }
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
