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
  results.innerText = result;

  // return the result
  return score;
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
  checkScore();
}

function checkScore () {
  score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

/*
function game() {
  let computerScore = 0;
  let playerScore = 0;

  // play five rounds, keeping track of the score
  for (let i = 0; i < 5; i++) {
    let result = playRound(getPlayerChoice(), getComputerChoice()).slice(4, 5);

    switch (result) {
      case "l":
        ++computerScore;
        console.log(`Round ${i + 1}: computer`);
        break;
      case "w":
        ++playerScore;
        console.log(`Round ${i + 1}: player`);
        break;
      default:
        console.log(`Round ${i + 1}: draw`);
    }
  }

  // alert the player of the game result
  if (computerScore > playerScore) {
    alert("You lost the game! Better luck next time!");
  }
  else if (playerScore > computerScore) {
    alert("You won the game! Congratulations!");
  }
  else {
    alert("The game ended in a tie! Play again!");
  }
}
*/
/*
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
*/

let playerScore = 0;
let computerScore = 0;
const score = document.querySelector("div.score");
checkScore();

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", makeChoice);
});

const results = document.querySelector("div.results");