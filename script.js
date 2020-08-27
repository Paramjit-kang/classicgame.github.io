import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultTextEl = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".fas");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let playerScore = 0;
let computerScore = 0;

let computerChoice = "";

function resetIcons() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");

    stopConfetti();
    removeConfetti();
  });
}

//Reset scores and texts

function resetAll() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resetIcons();
}

window.resetAll = resetAll;

//computer random number

function computerSelect() {
  let randomNumber = Math.random();

  if (randomNumber < 0.2) {
    computerChoice = "rock";
  } else if (randomNumber <= 0.4) {
    computerChoice = "paper";
  } else if (randomNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (randomNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

function computerDisplay() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

// Updates the result, scores and adds logic.

function updateResult(playerChoice) {
  if (playerChoice === computerChoice) {
    resultTextEl.textContent = `It's a TIE.`;
  } else {
    const choice = choices[playerChoice];

    if (choices[playerChoice].defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultTextEl.textContent = `You Won.`;
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else {
      resultTextEl.textContent = "You Lost.";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  }
}

function checkResults(playerChoice) {
  resetIcons();
  computerSelect();
  computerDisplay();
  updateResult(playerChoice);
}
// Passing player selection value and style icons

function select(playerChoice) {
  // check result
  checkResults(playerChoice);

  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

window.select = select;

resetAll();
