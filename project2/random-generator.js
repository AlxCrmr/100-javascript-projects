/* ========= VARIABLES ========= */
var userRandNum = document.querySelector('#randomNumber'),
    randNumBtn = document.querySelector("#randomNumberBtn"),
    randNumOutput = document.querySelector("#randomNumReturn"),
    numOfNums = document.querySelector("#numOfNums"),
    minNum = document.querySelector("#minNum"),
    maxNum = document.querySelector("#maxNum"),
    randNumBtn2 = document.querySelector("#randNumBtn2"),
    numReturn2 = document.querySelector("#numReturn2"),
    randColorBtn = document.querySelector('#randColorBtn');


/* ========= FUNCTIONS ========= */
function isValidNumber (input) {
    if (isNaN(input)){
        return false;
    }else if ( input < 0 ) {
            return false;
    } else {
        return true;
    }
}   //isValidNumber FUNC

function generateNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}//generateRandomNum FUNC

function randomNumbers (amount, min, max) {
    var randNumsArr = [];
    for ( var i = 0; i < amount; i++ ) {
         randNumsArr.push(generateNum(parseInt(min), parseInt(max)));
    }
    return randNumsArr.join(', ');
} //randomNumbers FUNC

function getHexCode() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}//getHexCode

function getColorCode () {
    var color;
    if(document.querySelector('#hex').checked){
        color =getHexCode();
            document.querySelector('#colorCode').innerHTML = color;
            document.querySelector('#colorCodeBg').style.background =color;
    }else if (document.querySelector('#rgb').checked) {
        color = "rgb(" + generateNum(0, 255) + ", " + generateNum(0, 255) + ", " + generateNum(0, 255) + ")";
        document.querySelector('#colorCode').innerHTML = color;
        document.querySelector('#colorCodeBg').style.background =color;
    }else {
        document.querySelector('#colorCode').innerHTML = "Please check one."
    }
}//getColorCode FUNC

/* ========= CLICK FUNCTIONS ========= */

randNumBtn.addEventListener("click", function () {
    if(userRandNum.value.length == 0){
        randNumOutput.innerHTML = "Please enter a number";
    } else if (isValidNumber(userRandNum.value)) {
        randNumOutput.innerHTML = "Your random number between 0 and " + userRandNum.value + " is: " + Math.floor((Math.random() * userRandNum.value) + 1);
    } else {
        randNumOutput.innerHTML = "Please enter a valid number.";
    }
});     //CLICK FUNC


randNumBtn2.addEventListener("click", function () {
    if(isValidNumber(numOfNums.value) && isValidNumber(minNum.value) && isValidNumber(maxNum.value)) {
        numReturn2.innerHTML = randomNumbers(numOfNums.value, minNum.value, maxNum.value);
    } else {
         numReturn2.innerHTML = "Please enter a valid numbers.";
    }
});     //CLICK FUNC

randColorBtn.addEventListener("click", function () {
    getColorCode();
}); //CLICK FUNC
