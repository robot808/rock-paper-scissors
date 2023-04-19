function getComputerChoice() {
  // get a random whole number between 1 and 3
  const choice = Math.ceil(Math.random() * 3);

  // 1 for rock, 2 for paper, 3 for scissors
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return;
  } 
}
