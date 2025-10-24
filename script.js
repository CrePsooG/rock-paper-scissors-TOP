function getComputerChoice() {
  let i = Math.floor((Math.random() * 3) + 1 )
  if(i == 1) {
    return "rock"
  } else if(i == 2) {
    return "paper"
  } else return "scissors"
}

function getHumanChoice() {
  let choice = prompt("Make your choice: Rock or Paper or Scissors")
  return choice.toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's a draw!")
  } else if (humanChoice == "rock" && computerChoice == "paper") { //computer win
    computerScore++;
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice == "rock" && computerChoice == "scissors") { // human win
    humanScore++;
    console.log("You win! Rock beats Scissors");
  } else if (humanChoice == "paper" && computerChoice == "rock") { // human win
    humanScore++;
    console.log("You win! Paper beats Rock");
  } else if (humanChoice == "paper" && computerChoice == "scissors") { // computer win
    computerScore++;
    console.log("You lose! Scissors beats Paper");
  } else if (humanChoice == "scissors" && computerChoice == "rock") { // computer win
    computerScore++;
    console.log("You lose! Rock beats Scissors");
  } else if (humanChoice == "scissors" && computerChoice == "paper") { // human win
    humanScore++;
    console.log("You win! Scissors beats Paper");
  }
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

for(let i = 0; i < 5; i++){
  playGame();
}
