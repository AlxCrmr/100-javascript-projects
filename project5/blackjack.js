const cards =  ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const cardType = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
let compCards = [];
let playerCards = [];
let compSuits = [];
let playerSuits = [];
const startGame = document.querySelector(".start-btn");
const hitBtn = document.querySelector(".hit-btn");
let cardNum = 0;


function generateNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCards() {
    for(let numOfCards = 0; numOfCards < 21; numOfCards++  ){
        compCards.push(generateNum(0,12));
        compSuits.push(cardType[generateNum(0,3)]);
        playerCards.push(generateNum(0,12));
        playerSuits.push(cardType[generateNum(0,3)]);
    }
    //console.log(`Computer Card ${compCards} Numbers`);
    //console.log(`Computer Card Suits ${compSuits}`);
    //console.log(`Player Card ${playerCards} Numbers`);
    //console.log(`Player Card Suits ${playerSuits}`);
}

function resetGame() {
    compCards = [];
    playerCards = [];
    compSuits = [];
    playerSuits = [];
    cardNum = 0;
}

startGame.addEventListener("click", function () {
    resetGame() ;
    generateCards();
    cardNum = 1;
    console.log(`ComputerCard 1: ${compCards[0]} ${compSuits[0]}`);
    console.log(`ComputerCard 2: ${compCards[1]} ${compSuits[1]}`);
    console.log(`PlayerCard 1: ${playerCards[0]} ${playerSuits[0]}`);
    console.log(`PlayerCard 2: ${playerCards[1]} ${playerSuits[1]}`);
});

hitBtn.addEventListener("click", function () {
    cardNum++;
    console.log(`ComputerCard: ${compCards[cardNum]} ${compSuits[cardNum]}`);
    console.log(`PlayerCard: ${playerCards[cardNum]} ${playerSuits[cardNum]}`);
});
