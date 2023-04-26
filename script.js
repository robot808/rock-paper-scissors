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
/*
function getPlayerChoice() {
  // ask the player for their choice
  let choice = prompt("Will you choose rock, paper, or scissors?").toLowerCase();

  // validate the player's choice
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Error: invalid entry\nPlease enter rock, paper, or scissors.").toLowerCase();
  }

  // alert the player what was chosen
  alert(`You have chosen ${choice}.`);

  // return the player's choice
  return choice;
}
*/
function playRound (playerSelection, computerSelection) {
  // determine the result
  let result = `You have chosen ${playerSelection}!
                The computer has chosen ${computerSelection}!\n`;
  let win = `You win! ${playerSelection} beats ${computerSelection}!`;
  let lose = `You lose! ${computerSelection} beats ${playerSelection}!`;
  let draw = "It's a draw!";

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      result += draw;
    } 
    else if (computerSelection === "paper") {
      result += lose;
    }
    else if (computerSelection === "scissors") {
      result += win;
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result += win;
    } 
    else if (computerSelection === "paper") {
      result += draw;
    }
    else if (computerSelection === "scissors") {
      result += lose;
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result += lose;
    } 
    else if (computerSelection === "paper") {
      result += win;
    }
    else if (computerSelection === "scissors") {
      result += draw;
    }
  }

  // alert the player of the result
  results.innerText = result;

  // return the result
  return result;
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

const results = document.querySelector(".results");