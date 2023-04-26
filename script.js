function displayScore () {
  score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

function checkScore () {
  if (playerScore >= 5) {
    game.textContent = "You won the game! Congratulations!";
    resetGame();
  }
  else if (computerScore >= 5) {
    game.textContent = "You lost the game! Better luck next time!";
    resetGame();
  }
  else {
    game.textContent = "";
  }
}

function makeChoice (event) {
  const playerChoice = event.target.id.toString();
  const score = playRound(playerChoice, getComputerChoice());
  if (score) {
    switch (score) {
      case 1:
        playerScore++;
        break;
      default:
        computerScore++;
    }
  }
  displayScore();
  checkScore();
}

function getComputerChoice() {
  // get a random whole number between 1 and 3
  const random = Math.ceil(Math.random() * 3);

  // 1 for rock, 2 for paper, 3 for scissors
  let choice;

  switch (random) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
  }

  // return the computer's choice
  return choice; 
}

function playRound (playerChoice, computerChoice) {
  // determine the result
  let result = `You have chosen ${playerChoice}!
                The computer has chosen ${computerChoice}!\n`;
  let win = `You win! ${playerChoice} beats ${computerChoice}!`;
  let lose = `You lose! ${computerChoice} beats ${playerChoice}!`;
  let draw = "It's a draw!";
  let score = 0;

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      result += draw;
    } 
    else if (computerChoice === "paper") {
      result += lose;
      score = -1;
    }
    else if (computerChoice === "scissors") {
      result += win;
      score = 1;
    }
  }
  else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      result += win;
      score = 1;
    } 
    else if (computerChoice === "paper") {
      result += draw;
    }
    else if (computerChoice === "scissors") {
      result += lose;
      score = -1;
    }
  }
  else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      result += lose;
      score = -1;
    } 
    else if (computerChoice === "paper") {
      result += win;
      score = 1;
    }
    else if (computerChoice === "scissors") {
      result += draw;
    }
  }

  // alert the player of the result
  round.innerText = result;

  // return the result
  return score;
}

const score = document.querySelector("div.score");
let playerScore = 0;
let computerScore = 0;
displayScore();

const round = document.querySelector("div.round");
const game = document.querySelector("div.game");

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", makeChoice);
});