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

  // alert the player what was chosen
  alert(`The computer has chosen ${choice}.`);

  // return the computer's choice
  return choice; 
}

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

function playRound (playerSelection, computerSelection) {
  // determine the result
  let result;

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      result = "It's a draw!";
    } 
    else if (computerSelection === "paper") {
      result = "You lose! Paper beats rock!";
    }
    else if (computerSelection === "scissors") {
      result = "You win! Rock beats scissors!";
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You Win! Paper beats rock!";
    } 
    else if (computerSelection === "paper") {
      result = "It's a draw";
    }
    else if (computerSelection === "scissors") {
      result = "You lose! Scissors beats paper!";
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose! Rock beats scissors!";
    } 
    else if (computerSelection === "paper") {
      result = "You win! Scissors beats paper!";
    }
    else if (computerSelection === "scissors") {
      result = "It's a draw!";
    }
  }

  // alert the player of the result
  alert(result);

  // return the result
  return result;
}

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

game();