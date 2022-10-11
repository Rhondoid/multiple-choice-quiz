//Let the game begin

var questions=["One", "Two", "Three", "Four"];
var answer="Coffee";
var incorrectAnswer="Wrong!"
var score=0;
var clock="timer"

var queStart="Start Quiz";


var startQuiz =document.getElementsByName("Start Quiz");
const queQuestions=document.getElementsByName ("questions");
const viewHighScores =document.getElementsByName("View High Scores");
const player=document.getElementsByName("Enter Initials");


// const hide={
  
// }
// const show={

// }
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
if (response==questions[i].answer) {
    score++;
    alert ("Correct");
    
} else {
    "Wrong!", timer -= 10;
    
}



queStartBtn.addEventListener(click, "Start Quiz");
"Submit".addEventListener(click, "Submit");
viewHighScores.addEventListener(click,"View High Scores");
scoreBtn.addEventListener(click, "Enter Initials");

