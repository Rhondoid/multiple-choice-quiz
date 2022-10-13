//Let the game begin


// const viewHighScores =document.getElementsByName("View High Scores");
// const player=document.getElementsByName("Enter Initials");
var questionTextEl = document.getElementById("question-text");
var currentQuestionNumber = 0;
var answerEla =document.getElementById('answer-a');
var answerElb =document.getElementById('answer-b');
var answerElc =document.getElementById('answer-c');
var answerEld =document.getElementById('answer-d');

var timeLeft = 50;

var questions =[
    {
        question: "What is Brazil's top commodity?",
        answers: ["soybeans", "coffee", "sugar","corn"],
        correctAnswer: "coffee"
    },
    {
        question: "What does Starbucks sell the most of?",
        answers: ["soybeans", "coffee", "sugar","corn"],
        correctAnswer: "coffee"
    },
    {
        question: "What drink do US citizens prefer?",
        answers: ["soybeans", "coffee", "sugar","corn"],
        correctAnswer: "coffee"
    },
    {
        question: "What is the focus of this quiz?",
        answers: ["soybeans", "coffee", "sugar","corn"],
        correctAnswer: "coffee"
    }
    
]

console.log(questions[0].answers[3]);

function setQuestionData(index){
    questionTextEl.textContent = questions[index].question;
    answerEla.textContent = questions[index].answers[0];
    answerElb.textContent = questions[index].answers[1];
    answerElc.textContent = questions[index].answers[2];
    answerEld.textContent = questions[index].answers[3];
}

setQuestionData(0);
countdown()

var timerEl = document.getElementById('countdown');


function a() {
    timeLeft -= 5;
}

function checkIfCorrect(element){
    console.log("hi")
    if(element.textContent == questions[currentQuestionNumber].correctAnswer){
        currentQuestionNumber ++;
        if(currentQuestionNumber < questions.length){
          setQuestionData(currentQuestionNumber);
        }
        else{
          if(localStorage.getItem('highScore') < timeLeft){
            localStorage.setItem('highScore', timeLeft);
          }
          location.href="highscore.html"
        }
      }
      else{
        timeLeft -= 5;
      }
}

// Timer that counts down from 5
function countdown() {

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}