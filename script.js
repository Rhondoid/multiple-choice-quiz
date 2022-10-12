//Let the game begin

var questions=["One", "Two", "Three", "Four"];
var answer="Coffee";
var incorrectAnswer="Wrong!"
var score=0;
var time="timer"
var response= "answer"

var queStart="StartQuiz";


var startQuiz =document.getElementById("StartQuiz");
const queQuestions=document.getElementsByName ("questions");
const viewHighScores =document.getElementsByName("View High Scores");
const player=document.getElementsByName("Enter Initials");
var questionText = document.getElementById("question-text");
console.log("a: ", questionText)
var currentQuestionNumber = 0;

var questions =[
    {
        "One": "What is Brazil's top commodity?\n\(a) soybeans\n\(b) tea\n\
        (c) juice\n\(d)coffee",
        answer: "coffee"

    },
    {
        "Two": "What does Starbucks sell the most of?\n\
        (a) Soda \n\(b)Tea\n\(c) Juice\n\(d)coffee",
        answer:"coffee"
    },
    {
        "Three": "What drink do US citizens prefer?\n\
        (a)bottled water\n\ (b)coffee\n\(c)fruit beverage\n\(d)milk",
        answer:"coffee"
    },
    {
        "four": "What is the focus of this quiz?\n\(a)soda\n\(b)coffee\n\(c)water\n\(d)cream",
        answer:"coffee"
    }
    
]
for (var i=0; i< questions.length; i++) {
 
}
// if (response==questions[i].answer) {
//     score++;
//     alert ("Correct");
    
// } else {
//     "Wrong!", timer -= 10;
    
// }

console.log(questions[0].One)
questionText.textContent = questions[0].One;
console.log(questionsText);

console.log(startQuiz)
startQuiz.addEventListener('click', countdown, false);
// // Submit.addEventListener("click", Submit);
// viewHighScores.addEventListener("click","View High Scores");
// scoreBtn.addEventListener("click", "Enter Initials");

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

function displayMessage(){
    console.log("hello")
}

// Timer that counts down from 5
function countdown(evt) {
  var timeLeft = 5;

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
  }, 50);
}