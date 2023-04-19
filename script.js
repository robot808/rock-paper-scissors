function getComputerChoice() {
  // get a random whole number between 1 and 3
  const random = Math.ceil(Math.random() * 3);

  // 1 for rock, 2 for paper, 3 for scissors
  let choice;

  switch (random) {
    case 1:
      choice = "rock";
    case 2:
      choice = "paper";
    case 3:
      choice = "scissors";
  }

  // alert the player what was chosen
  alert(`The computer has chosen ${choice}.`);

  // return the computer's choice
  return choice; 
}
