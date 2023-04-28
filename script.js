function displayScore () {
  // update player and computer scores in score div
  score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function resetGame() {
  // return game to original state
  playerScore = 0;
  computerScore = 0;
  displayScore();
  round.innerText = "";
  winner.innerText = "";
  reset.style.display = "none"; // re-hide reset button
}

function checkScore () {
  // diplay winner in winner div
  const winningScore = 5;
  if (playerScore >= winningScore) {
    winner.innerText += `You won the game! Congratulations!
                        Click the button below to play again!`;
    reset.style.display = "inline"; // unhide reset button
  }
  else if (computerScore >= winningScore) {
    winner.innerText += `You lost the game! Better luck next time!
                        Click the button below to play again!`;
    reset.style.display = "inline"; // unhide reset button
  }
  else {
    winner.textContent = "";
  }
}

function makeChoice (event) {
  if (winner.innerText) return; // do nothing if awaiting game reset

  // get player choice from button id and play a round
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
  checkScore(); // determine if someone has won
}

function getComputerChoice() {
  // get a random whole number between 1 and 3
  const random = Math.ceil(Math.random() * 3);
  
  let choice;
  // 1 for rock, 2 for paper, 3 for scissors
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

  return choice; 
}

function playRound (playerChoice, computerChoice) {
  let result = `You have chosen ${playerChoice}.
                The computer has chosen ${computerChoice}.\n`;
  let win = `You win! ${playerChoice} beats ${computerChoice}!`;
  let lose = `You lose! ${computerChoice} beats ${playerChoice}!`;
  let draw = "It's a draw!";
  let score = 0;

  // determine the result
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

  // display the result of the round in round div
  round.innerText = result;

  return score;
}

const score = document.querySelector(".score h4");
let playerScore = 0;
let computerScore = 0;
displayScore();

const round = document.querySelector(".round p");
const winner = document.querySelector(".winner p");
const reset = document.querySelector("button#reset");

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", makeChoice);
});

reset.addEventListener("click", resetGame);