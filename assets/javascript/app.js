//VARIABLES
//TODO: create variables
//variable for the timer
let timer;
// //variable for the questions

// var quesNumOne = $("#answer1").value;

//variable to hold the correct answers
var numCorrect = 0;
//variable to hold the incorrect answers
var numIncorrect = 0;





//TODO: create functions


/*timer function for the game timer.*/
function countdown(secs, newElem) {
    let element = document.getElementById(newElem);
    element.innerHTML = "Time left: " + secs;
    if (secs < 1) {
        clearTimeout(timer);
        checkAnswers();
        tallyScore();
    }
    else {
        secs--;
        timer = setTimeout('countdown(' + secs + ',"' + newElem + '")', 1000);
    }

}

//function to tally the score
var tallyScore = function () {
    $("#correct").text("Correct: " + numCorrect);
    $("#incorrect").text("Incorrect: " + numIncorrect);
}

//function to check the answers of the game
let checkAnswers = function () {

    let quesNumOne = document.triviaGame.Q1.value;
    let quesNumTwo = document.triviaGame.Q2.value;
    let quesNumThree = document.triviaGame.Q3.value;
    let quesNumFour = document.triviaGame.Q4.value;
    let quesNumFive = document.triviaGame.Q5.value;

    if (quesNumOne == "3") {
        numCorrect++;
    }
    else {
        numIncorrect++;
    };
    if (quesNumTwo == "3 years") {
        numCorrect++;
    }
    else {
        numIncorrect++;
    }
    if (quesNumThree == "114") {
        numCorrect++;
    }
    else {
        numIncorrect++;
    }
    if (quesNumFour == "Pickles") {
        numCorrect++;
    }
    else {
        numIncorrect++;
    }
    if (quesNumFive == "Their paws") {
        numCorrect++;
    }
    else {
        numIncorrect++;
    }
}

$(document).ready(function () {


    countdown(60, "divForTimer");


    /*timeExpired function - When the timer  runs out the game is over and will tally up score based on answered / unanswered questions
    maybe have an alert feature that pops up to say you are out of time, you got 5 correct & 5 wrong*/


    /*gameEndByButton function (shorten function name) - Otherwise, game ends when they hit the submit button at the end of the game form. Results are tallied with another alert box*/

});


$("#submitButton").click(function () {
    document.triviaGame.button.disabled = true;
    checkAnswers();
    tallyScore();
    clearTimeout(timer);
});
