const selection = ["rock", "paper", "scissors"];

const score = { player: 0, computer: 0 };

const computerPlay = () => selection[Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie";
  }
  if (!selection.includes(playerSelection)) {
    return "Wrong Selection";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    score["player"]++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    score["player"]++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    score["player"]++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    score["computer"]++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const game = () => {
  for (let index = 0; index < 5; index++) {
    const playerSelection = window.prompt("Rock, Paper or Scissors").toLowerCase();
    const result = playRound(playerSelection, computerPlay());
    console.log(result);
    if (result === "Wrong Selection") {
      index--;
    }
  }
  if (score["player"] > score["computer"]) {
    console.log(`You Win. ${score["player"]}:${score["computer"]}`);
  } else if (score["player"] < score["computer"]) {
    console.log(`You Lose. ${score["player"]}:${score["computer"]}`);
  } else {
    console.log("It's a tie!");
  }
};

game();
