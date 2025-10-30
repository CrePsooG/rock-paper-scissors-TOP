function getComputerChoice() {
  let i = Math.floor((Math.random() * 3) + 1 )
  if(i == 1) {
    return "rock"
  } else if(i == 2) {
    return "paper"
  } else return "scissors"
}

let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;

function playRound(humanChoice, computerChoice) {
  let msg = "";
  if (humanChoice == computerChoice) {
    msg = "It's a draw!";
  } else if (humanChoice == "rock" && computerChoice == "paper") { //computer win
    computerScore++;
    msg = "You lose! Paper beats Rock";
  } else if (humanChoice == "rock" && computerChoice == "scissors") { // human win
    humanScore++;
    msg = "You win! Rock beats Scissors";
  } else if (humanChoice == "paper" && computerChoice == "rock") { // human win
    humanScore++;
    msg = "You win! Paper beats Rock";
  } else if (humanChoice == "paper" && computerChoice == "scissors") { // computer win
    computerScore++;
    msg = "You lose! Scissors beats Paper";
  } else if (humanChoice == "scissors" && computerChoice == "rock") { // computer win
    computerScore++;
    msg = "You lose! Rock beats Scissors";
  } else if (humanChoice == "scissors" && computerChoice == "paper") { // human win
    humanScore++;
    msg = "You win! Scissors beats Paper";
  }

  const resultsMsg = document.createElement("p");
  resultsMsg.textContent = msg;
  results.appendChild(resultsMsg);

  totalRounds++;

  if(totalRounds == 5) {
    end(humanScore,computerScore);
  }
}

function end(humanScore,computerScore) {
  const resultsMsg = document.createElement("p");
  
  if(humanScore > computerScore) {
    resultsMsg.textContent = "YOU WON THE MATCH";
    resultsMsg.style.color = "green";
  } else if(humanScore < computerScore) {
    resultsMsg.textContent = "YOU LOST THE MATCH";
    resultsMsg.style.color = "red";
  } else resultsMsg.textContent = "NO WINNER";

  results.appendChild(resultsMsg);
}

function playGame(humanSelection) {
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

const btnRock = document.querySelector("#btn1");
btnRock.addEventListener("click", (e) => {  
  if(totalRounds < 5) {
    playGame("rock");
  }
});

const btnPaper = document.querySelector("#btn2");
btnPaper.addEventListener("click", (e) => { 
  if(totalRounds < 5) {
    playGame("paper");
  }
});

const btnScissors = document.querySelector("#btn3");
btnScissors.addEventListener("click", (e) => {
  if(totalRounds < 5) {
    playGame("scissors");
  }
});

const results = document.querySelector("#results");
