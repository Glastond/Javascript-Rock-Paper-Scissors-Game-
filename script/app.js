var userScore = 0;
var userScore_span = document.querySelector("#user-score");
var computerScore = 0;
var computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".results>p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUserWord = "User".fontsize(3).sub();
const smallCompWord = "Comp".fontsize(3).sub();

const startButton = document.getElementById("start-button");
const instructions = document.getElementById("instruction");
const choices_div = document.querySelector(".choices");
const actionMessage_div = document.getElementById("action-message");

// Randomly returning Computer Choice
const getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

// Converting short froms to fullforms
var convertToWord = letter => {
  switch (letter) {
    case "r":
      return "Rock";
    case "p":
      return "Paper";
    case "s":
      return "Scissors";
  }
};

// Adding And Removing ClassLists
var addRemoveClass = x => {
  scoreBoard_div.classList.add(x);
  setTimeout(() => {
    scoreBoard_div.classList.remove(x);
  }, 300);
};

// If User Wins.
var win = (userChoice, ComputerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    ComputerChoice
  )}${smallCompWord}. You Win! 🔥 `;

  addRemoveClass("green_glow");
};

// If User Loses
var lose = (userChoice, ComputerChoice) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} Loses To ${convertToWord(
    ComputerChoice
  )}${smallCompWord}. You Lost..`;
  addRemoveClass("red_glow");
};

// If It's a Draw
var draw = (userChoice, ComputerChoice) => {
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} Equals ${convertToWord(
    ComputerChoice
  )}${smallCompWord}. It's A Draw! `;
  addRemoveClass("gray_glow");
};

// Main Game Logic.
var game = userChoice => {
  const ComputerChoice = getComputerChoice();

  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, ComputerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, ComputerChoice);
      break;
    default:
      draw(userChoice, ComputerChoice);
  }
};

// All the Eventlisteners.
function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scissors_div.addEventListener("click", () => {
    game("s");
  });
}
main();

// To Hide The Instructions
startButton.addEventListener("click", () => {
  instructions.classList.add("hide");
  choices_div.style.opacity = 1;
  actionMessage_div.style.opacity = 1;
});
