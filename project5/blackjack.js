const cards =  ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardType = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
const startGame = document.querySelector(".start-btn");
const hitBtn = document.querySelector(".hit-btn");
const cardContainer = document.querySelector('#card-container');
const userScore = document.querySelector(".card-score");
let compCards = [];
let playerCards = [];
let compSuits = [];
let playerSuits = [];
let cardNum = 0;
let cardSum;


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
    cardContainer.innerHTML += `<div class="card card${cardNum}">
        <p class="card-value card-value--pull-left">${playerCards[cardNum]}</p>
        <p class="card-class">${playerSuits[cardNum]}</p>
        <p class="card-value card-value--pull-right">${playerCards[cardNum]}</p>
    </div>`
    generateCardColor()
}

//  Calculate the  sum of the cards
function calculateCardVals() {
    cardSum = 0;
    for(let i = 0; i <= cardNum; i++) {
        if(playerCards[i] === "K"){
            playerCards[i] = 10;
        }else if(playerCards[i] === "Q"){
            playerCards[i] = 10;
        }else if(playerCards[i] === "J"){
            playerCards[i] = 10;
        }else if(playerCards[i] === "A"){
            if(cardSum + 11 > 21) {
                playerCards[i] = 1;
            }else {
                playerCards[i] = 11;
            }
        }
        cardSum += parseInt(playerCards[i]);
        userScore.innerHTML= cardSum;
    }//for
    //console.log(cardSum);
    winCondition();
}

//  Check to see if the cards add to or are greater then 21
function winCondition() {
     if (cardSum === 21) {
            setTimeout(function(){ alert(userScore.innerHTML= "21 YOU WIN");
        resetGame(); }, 100);
    } else if (cardSum > 21 ) {
        setTimeout(function(){ alert(userScore.innerHTML= `${cardSum} Over 21 You lose!`);
    resetGame(); }, 100);
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
    //console.log(`Computer Card ${compCards} Numbers`);
    //console.log(`Computer Card Suits ${compSuits}`);
    //console.log(`Player Card ${playerCards} Numbers`);
    //console.log(`Player Card Suits ${playerSuits}`);
}

//  Reset the game
function resetGame() {
    compCards = [];
    playerCards = [];
    compSuits = [];
    playerSuits = [];
    cardNum = 0;
    cardContainer.innerHTML =   "";
    userScore.innerHTML= ""
}

startGame.addEventListener("click", function () {
    resetGame() ;
    generateCardVals();
    generateCard();
    cardNum++;
    generateCard();
    //console.log(`ComputerCard 1: ${compCards[0]} ${compSuits[0]}`);
    //console.log(`ComputerCard 2: ${compCards[1]} ${compSuits[1]}`);
    //console.log(`PlayerCard 1: ${playerCards[0]} ${playerSuits[0]}`);
    //console.log(`PlayerCard 2: ${playerCards[1]} ${playerSuits[1]}`);
    calculateCardVals();
    winCondition()
});

hitBtn.addEventListener("click", function () {
    cardNum++;
    generateCard();
    //console.log(`ComputerCard: ${compCards[cardNum]} ${compSuits[cardNum]}`);
    //console.log(`PlayerCard: ${playerCards[cardNum]} ${playerSuits[cardNum]}`);
    calculateCardVals();
});
