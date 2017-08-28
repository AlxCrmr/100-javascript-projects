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
