

var scoreTextElement = document.getElementById("scoreText")

var highScoreNumber = localStorage.getItem("highScore");

scoreTextElement.textContent = "HIGH SCORE: " + highScoreNumber;

