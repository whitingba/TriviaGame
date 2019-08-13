# TriviaGame
Trivia Game for Week 5 homework

**HTML file - index.html**
HTML file holds the main structure of my game. I have a Bootstrap Jumbotron for the timer and game results at the top.
Used a Bootstrap card to place the main game questions.

**CSS file - style.css which is held in the assets then css directories**
CSS file contains the majority of the styling for this game. 

**Javascript file - app.js which is held in the assets then javascript directories**
When the page loads an alert will pop up with instructions for the game, once 'ok' is clicked the timer will begin counting down
from 60 seconds. There are 5 trivia questions about animals. Functions contained within the game will check that the correct answers
were chosen from the form within the html file. Upon submit, the submit button is disabled, the trivia answers are checked and the
timer stops. Unanswered questions will count as incorrect. If the timer runs out the answered questions will be checked. Upon
submit or runout of the timer the total correct or incorrect will display along with the correct answers for the game.

Deployed game: https://whitingba.github.io/TriviaGame/
