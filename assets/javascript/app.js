
//variable for the timer
let timer;

//variable to hold the correct answers
var numCorrect = 0;

//variable to hold the incorrect answers
var numIncorrect = 0;

//variable to hold answers
var answer1 = "1. How many species of zebras are there?: 3 species of zebras";
var answer2 = "2. A snail can sleep for how many years?: 3 years";
var answer3 = "3. Jia Jia, the oldest giant panda, died in 2016 at the age of ___ ?: 114 years old";
var answer4 = "4. A group of hedgehogs is known as what?: A group of prickle";
var answer5 = "5. Where is the only place dogs have sweat glands?: Their paws";



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

//function for the Trivia Answers
var triviaAnswers = function () {
    var thisIsAVar = "<div class='answerStyle'>" + answer1 + "<br>" + answer2 + "<br>" + answer3 + "<br>" + answer4 + "<br>" + answer5 + "</div>";
    return thisIsAVar;
}


//function to tally the score and give the answers
var tallyScore = function () {
    $("#divForTimer").html("Correct: " + numCorrect + "<br>" + "Incorrect: " + numIncorrect + "<br>" + triviaAnswers());
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
    if (quesNumFour == "Prickle") {
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

//start game function
$(document).ready(function () {

    alert("Click 'ok' to play my animal trivia game! You have 60 seconds to select your guesses.");
    countdown(60, "divForTimer");

});

//function for what happens when the game is submitted
$("#submitButton").click(function () {
    document.triviaGame.button.disabled = true;
    checkAnswers();
    tallyScore();
    clearTimeout(timer);
});
