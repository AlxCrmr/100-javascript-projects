const cards =  ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardType = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
const startGame = document.querySelector(".start-btn");
const hitBtn = document.querySelector(".hit-btn");
const playerCardContainer = document.querySelector('#player-card-container');
const computerCardContainer =document.querySelector('#computer-card-container');
const playerScore = document.querySelector(".player-card-score");
const compScore = document.querySelector(".computer-card-score");
let compCards = [];
let playerCards = [];
let compSuits = [];
let playerSuits = [];
let playerCardNum = 0;
let computerCardNum = 0;
let start = true;
let playerTurn = true;
let compSum = 0
let playerSum = 0;


//  Generate random numbers
function generateNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate card color
function generateCardColor() {
    if(generateNum(1,2) === 1 ) {
         document.querySelector(".card" + cardNum).classList.add("red");
    }else{
         document.querySelector(".card" + cardNum).classList.add("black");
    }
}

//  Generate Cards
function generateCard() {

    if(start && playerTurn){
        playerCardContainer.innerHTML += `<div class="player-card card${playerCardNum}">
            <p class="card-value card-value--pull-left">${playerCards[playerCardNum]}</p>
            <p class="card-class">${playerSuits[playerCardNum]}</p>
            <p class="card-value card-value--pull-right">${playerCards[playerCardNum]}</p>
        </div>`
        playerCardNum++;
        playerCardContainer.innerHTML += `<div class="player-card card${playerCardNum}">
            <p class="card-value card-value--pull-left">${playerCards[playerCardNum]}</p>
            <p class="card-class">${playerSuits[playerCardNum]}</p>
            <p class="card-value card-value--pull-right">${playerCards[playerCardNum]}</p>
        </div>`
        playerTurn = false;
    }else if (start && playerTurn === false){
        computerCardContainer.innerHTML += `<div class="computer-card card${computerCardNum}">
            <p class="card-value card-value--pull-left">${compCards[computerCardNum]}</p>
            <p class="card-class">${compSuits[computerCardNum]}</p>
            <p class="card-value card-value--pull-right">${playerCards[computerCardNum]}</p>
        </div>`
        computerCardNum++;
        computerCardContainer.innerHTML += `<div class="computer-card card${computerCardNum}">
            <p class="card-value card-value--pull-left">${compCards[computerCardNum]}</p>
            <p class="card-class">${compSuits[computerCardNum]}</p>
            <p class="card-value card-value--pull-right">${playerCards[computerCardNum]}</p>
        </div>`
        start = false;
        playerTurn = true;
    }else {
        if(playerTurn) {
            playerCardContainer.innerHTML += `<div class="player-card card${playerCardNum}">
                <p class="card-value card-value--pull-left">${playerCards[playerCardNum]}</p>
                <p class="card-class">${playerSuits[playerCardNum]}</p>
                <p class="card-value card-value--pull-right">${playerCards[playerCardNum]}</p>
            </div>`
            playerCardNum++;
            playerTurn = false;
        } else if (playerTurn === false) {
            computerCardContainer.innerHTML += `<div class="computer-card card${computerCardNum}">
                <p class="card-value card-value--pull-left">${compCards[computerCardNum]}</p>
                <p class="card-class">${compSuits[computerCardNum]}</p>
                <p class="card-value card-value--pull-right">${playerCards[computerCardNum]}</p>
            </div>`
            computerCardNum++;
            playerTurn = true;
        }
    }
    generateCardColor();
    calculateCardVals();
    setTimeout(function(){ computerTurn(); }, 200);
}

//  Calculate the  sum of the cards
function calculateCardVals() {
    let cardVal = 0;

    playerTurn ? turn = playerCardNum : turn = computerCardNum;
for(let i = 0; i < turn; i++){
    if(playerTurn){
        cardVal = playerCards[i]
    }else {
        cardVal = compCards[i]
    }
}
    if(cardVal === "K"){
        cardVal = 10;
    }else if(cardVal === "Q"){
        cardVal = 10;
    }else if(cardVal === "J"){
        cardVal = 10;
    }else if(cardVal === "A"){
        if(turn + 11 > 21) {
            cardVal = 1;
        }else {
            cardVal = 11;
        }
    }

    playerTurn ? playerSum +=  parseInt(cardVal) : compSum += parseInt(cardVal);


    console.log(playerSum, compSum);
    playerScore.innerHTML= playerSum;
    compScore.textContent = compSum;

}

//  Check to see if the cards add to or are greater then 21
function winCondition() {
     if (playerSum === 21) {
            setTimeout(function(){ alert("21 YOU WIN");
        resetGame(); }, 200);
    } else if (playerSum > 21 ) {
        setTimeout(function(){ alert(`${playerSum} Over 21 You lose!`);
    resetGame(); }, 200);
    }

    if (compSum === 21) {
           setTimeout(function(){ alert("21 COMPUTER WINS");
       resetGame(); }, 200);
   } else if (compSum > 21 ) {
       setTimeout(function(){ alert( `${compSum} is over 21. You win!`);
   resetGame(); }, 200);
   }
}


//  Generate the values of the cards
function generateCardVals() {
    for(let numOfCards = 0; numOfCards < 21; numOfCards++  ){
        compCards.push(cards[generateNum(0,12)]);
        compSuits.push(cardType[generateNum(0,3)]);
        playerCards.push(cards[generateNum(0,12)]);
        playerSuits.push(cardType[generateNum(0,3)]);
    }
}

// Computers turn
function computerTurn(){
    if(playerTurn ===false){
        if (compSum < 17){
            playerTurn = false;
            generateCard();
            winCondition()
        }
    }
}

//  Reset the game
function resetGame() {
    compCards = [];
    playerCards = [];
    compSuits = [];
    playerSuits = [];
    cardNum = 0;
    compSum = 0;
    playerCardNum = 0;
    computerCardNum = 0;
    start = true;
    playerTurn = true;
    computerCardContainer.innerHTML =   "";
    playerCardContainer.innerHTML =   "";
    playerScore.innerHTML= ""
    compScore.innerHTML = "";
    generateCardVals();
}

startGame.addEventListener("click", function () {
    resetGame() ;
    generateCard();
    computerTurn();

});

hitBtn.addEventListener("click", function () {
    generateCard();
});
