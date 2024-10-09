const ContenerUserChoice = document.getElementById("User-Choice");
const ContenerComputerChoice = document.getElementById("Computer-Choice");
const ContenerResult = document.getElementById("Result");

const Choice = document.querySelectorAll("button");
let UserChoice;
let ComputerChoice;
let result;

Choice.forEach((Choice) =>
  Choice.addEventListener("click", (e) => {
    UserChoice = e.target.id;
    ContenerUserChoice.innerHTML = `<img src="Image/${UserChoice}.png">`;
    genaratorComputerChoice();
    win();
  })
);

function genaratorComputerChoice() {
  random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    ComputerChoice = "Rock";
  }
  if (random === 2) {
    ComputerChoice = "Paper";
  }
  if (random === 3) {
    ComputerChoice = "Cissor";
  }

  ContenerComputerChoice.innerHTML = `<img src="Image/${ComputerChoice}.png">`;
}

function win() {
  if (UserChoice === ComputerChoice) {
    result = "DRAW";
  } else if (
    (UserChoice === "Rock" && ComputerChoice === "Cissor") ||
    (UserChoice === "Cissor" && ComputerChoice === "Paper") ||
    (UserChoice === "Paper" && ComputerChoice === "Rock")
  ) {
    result = "WIN";
  } else {
    result = "LOST";
  }
  ContenerResult.innerHTML = result;
}
