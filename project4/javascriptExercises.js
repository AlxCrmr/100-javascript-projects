function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* =========== Question 1 ============= */
function displayTime () {
    var question1 = document.getElementById("question1-answer"),
    currentDate = new Date(),
    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    today = currentDate.getDay(),
    hour = currentDate.getHours(),
    min = currentDate.getMinutes(),
    secs = currentDate.getSeconds(),
    curTime,
    time;

    if(hour < 12) {
        curTime = hour + "AM: " + min + ": " + secs;
    }else {
        hour = hour - 12;
        curTime = hour + "PM: " + min + ": " + secs;
    }
    question1.innerHTML = "Today is: " + weekday[today] + " <br> Current time is: " + curTime;
}
displayTime();


/* =========== Question 2 ============= */

document.getElementById("question2-answer").addEventListener("click", function(){
    window.print()
});


/* =========== Question 3 ============= */

function dateFormat () {
    var curDateFormat = new Date(),
    numDay = curDateFormat.getDate(),
    numMonth = curDateFormat.getMonth() +1,
    numYear = curDateFormat.getFullYear();
    document.getElementById("question3-answer").innerHTML = numMonth + "/" + numDay + "/" + numYear;

}
dateFormat();

/* =========== Question 4 ============= */
var a = 5, b = 6,  c = 7;
var perimeter = (a + b + c)/2;
var area =  Math.sqrt(perimeter*(perimeter - a)*(perimeter - b)*(perimeter - c));
document.getElementById("question4-answer").innerHTML = "The area of a square with side lengths of 5,6, and 7 is: " + area;

/* =========== Question 5 ============= */
var word ='w3resource';
var i = 0;
console.log("===== QUESTION 5 =====" );
while ( i < word.length) {
word= word.substr(1) + word.substr(0, 1);
    i++;
    console.log(word);
}


/* =========== Question 6 ============= */

var answer =document.getElementById("question6-answer");
document.getElementById("question6-btn").addEventListener("click", function (){
    var year = document.getElementById("question6").value;
    if ( year % 4 === 0) {
        if ( year % 100 === 0) {
            if ( year % 400 === 0) {
                answer.innerHTML = year + " is a leap year."
            } else
            answer.innerHTML = year + " is not a leap year."
        } else {
            answer.innerHTML = year + " is a leap year."
        }
    } else {
        answer.innerHTML = year + " is not a leap year."
    }
});

/* =========== Question 7 ============= */
var year;
for (year = 2014; year <= 2050; year++){
    var date7 = new Date(year, 0, 1);
    if ( date7.getDay() === 0 )
        document.getElementById("question7-answer").innerHTML = "1st January is being a Sunday  "+year;
    }

/* =========== Question 8 ============= */
var userInput = document.getElementById("question8-input");
var answer8 =document.getElementById("question8-answer");

document.getElementById("question8-btn").addEventListener("click", function() {
    var compNum =getRandomNum(1, 10);
            if (userInput.value == compNum) {
                answer8.innerHTML = "Good Work. Number was: " + compNum;
            } else {
                answer8.innerHTML ="Not matched. Number was: " + compNum;
            }
});

/* =========== Question 9 ============= */
var answer9 =document.getElementById("question9-answer");
function whenIsXmas() {
    var today = new Date();
    var xmas = new Date(today.getFullYear(),11,25)
    return Math.ceil((xmas-today) / ( 1000 * 60 * 60 * 24 ));
}

answer9.innerHTML = whenIsXmas() + " days until Christmas!"


/* =========== Question 10 ============= */
var question10Input =document.getElementById("question10-input1");
var operator = document.getElementById("operator");
var question10Input2 = document.getElementById("question10-input2");
var question10Answer = document.getElementById("question10-answer");
var question10btn = document.getElementById("question10-btn");


question10btn.addEventListener("click", function() {
    console.log(operator.value);
        if(operator.value === "multiply") {
            question10Answer.innerHTML = question10Input.value * question10Input2.value;
        }else if(operator.value === "divide") {
            question10Answer.innerHTML = question10Input.value / question10Input2.value;
        }
});


/* =========== Question 11  ============= */
var question11Input =document.getElementById("question11-input");
var question11Answer = document.getElementById("question11-answer");
var temp = document.getElementById("temp");
var question11btn = document.getElementById("question11-btn");
var farhenheit;
var celsius;

question11btn.addEventListener("click", function () {
    console.log(temp.value);
    if (temp.value === "celsius") {
        farhenheit = question11Input.value;
        celcius = (farhenheit - 32) * 5/9;
        question11Answer.innerHTML = celcius + "&#8451;";
    }else if (temp.value === "fahrenheit"){
        celcius = question11Input.value;
        farhenheit = (celcius * 9/5) + 32;
        question11Answer.innerHTML = farhenheit + "&#8457;";
    }
});
/* =========== Question 12  ============= */
document.getElementById("question12-btn").addEventListener("click", function() {
    alert(document.URL);
});
/* =========== Question 13  ============= */
var nameVar = 'abcd';
var num13 = 120;
this[nameVar] = num13;
console.log("===== QUESTION 13 =====");
console.log(this[nameVar]);

/* =========== Question 14  ============= */
console.log("===== QUESTION 14 =====");
filename = "index.js"
console.log(filename.split('.').pop());
filename = "portfolio.html"
console.log(filename.split('.').pop());
/* =========== Question 15  ============= */
var question15Input =document.getElementById("question15-input");
var question15Answer = document.getElementById("question15-answer");
var question15btn = document.getElementById("question15-btn");

question15btn.addEventListener("click", function() {
    if (question15Input.value > 13) {
        question15Answer.innerHTML = (question15Input.value - 13) * 2;
    } else {
        question15Answer.innerHTML = 13 - question15Input.value;
    }
});

/* =========== Question 16  ============= */
var question16Input =document.getElementById("question16-input");
var question16Input2  =document.getElementById("question16-input2");
var question16Answer = document.getElementById("question16-answer");
var question16btn = document.getElementById("question16-btn");

question16btn.addEventListener("click", function() {
    if (question16Input.value ===question16Input2.value) {
        question16Answer.innerHTML = (parseInt(question16Input.value) + parseInt(question16Input2.value)) * 3;
    } else {
        question16Answer.innerHTML = parseInt(question16Input.value) + parseInt(question16Input2.value);
    }
});

/* =========== Question 17  ============= */

var question17Input =document.getElementById("question17-input");
var question17Answer = document.getElementById("question17-answer");
var question17btn = document.getElementById("question17-btn");

question17btn.addEventListener("click", function() {
    if (parseInt(question17Input.value) > 19) {
        question17Answer.innerHTML = (parseInt(question17Input.value) - 19) * 3;
    } else {
        question17Answer.innerHTML = 19 - parseInt(question17Input.value);
    }
});

/* =========== Question 18  ============= */
function numberCheck(num1, num2) {
    if (num1 === 50 || num2 ===50) {
        return true;
    }else if (num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}
/* =========== Question 19  ============= */
function withinTwenty(num) {
    return ((Math.abs(100 - num) <= 20) || (Math.abs(400 - num) <= 20));
    }

/* =========== Question 20  ============= */
function posAndNeg (num1, num2) {
    if (num1 > 0 && num2 < 0 || num2 > 0 && num1 < 0){
        return true;
    } else {
        return false;
    }
}
/* =========== Question 21  ============= */

function pyString (string) {
    var firstLetters = string.substring(0,2).toLowerCase();
    if (firstLetters === "py") {
        return string;
    } else {
        return "Py" + string;
    }
}

/* =========== Question 22  ============= */
function removeChar (str, position) {
    var newStr = str.substring(0,position - 1) + str.substring(position, str.length);
    return newStr;
}
/* =========== Question 23  ============= */
function switchChars (str) {
    return  str.substr(-1)+ str.slice(1,-1) + str.substr(0, 1) 
}
