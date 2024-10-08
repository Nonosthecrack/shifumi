const ContenerUserChoice = document.getElementById("User-Choice");
const ContenerComputerChoice = document.getElementById("Computer-Choice");
const ContenerResult = document.getAnimations("Result");

const Choice = document.querySelectorAll("button");
let UserChoice;

Choice.forEach((Choice) =>
  Choice.addEventListener("click", (e) => {
    UserChoice = e.target.id;
    ContenerUserChoice.innerHTML = `<img src="Image/${UserChoice}.png">`;
  })
);
