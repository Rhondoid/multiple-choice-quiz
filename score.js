

var scoreTextElement = document.getElementById("scoreText");

var highScoreNumber = localStorage.getItem("highScore");

var enterInitialsElement = document.getElementById("enterInitials");

var enterInitials = localStorage.getItem(enterInitials);





scoreTextElement.textContent = "HIGH SCORE: " + highScoreNumber;
enterInitialsElement.textContent ="Enter Initials: ";

// Please recommend next steps. Unsure how to display Initials = score