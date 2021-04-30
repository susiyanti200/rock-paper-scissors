const win = { 0: 2, 1: 0, 2: 1 };

const score = { player: 0, computer: 0 };

const computerPlay = () => Math.floor(Math.random() * 3);

const checkRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "fa-meh";
  }
  if (win[playerSelection] === computerSelection) {
    score["player"]++;
    return "fa-smile";
  }
  score["computer"]++;
  return "fa-frown";
};

const displayScore = () => {
  playerScore.textContent = score["player"];
  computerScore.textContent = score["computer"];
};

const checkWinner = () => {
  if (score["player"] == 5 || score["computer"] == 5) {
    if (score["player"] > score["computer"]) {
      resultIcon.classList = "fas fa-grin-stars";
    } else {
      resultIcon.classList = "fas fa-sad-cry";
    }
    playButton.style.display = "block";
    playerSection.classList.remove("player-hover");
    playing = false;
  }
};

const playRound = (e) => {
  if (!playing) return;
  const playerSelection = parseInt(e.currentTarget.dataset.index);
  const computerSelection = computerPlay();
  computerWeapon.forEach((btn) => {
    if (parseInt(btn.dataset.index) === computerSelection) {
      btn.classList.add("choose");
      setTimeout(() => btn.classList.remove("choose"), 500);
    }
  });
  const result = checkRound(playerSelection, computerSelection);
  resultIcon.classList = `fas ${result}`;
  resultIcon.style.display = "block";
  displayScore();
  checkWinner();
};

const startGame = () => {
  score["player"] = 0;
  score["computer"] = 0;
  displayScore();
  resultIcon.style.display = "none";
  playButton.style.display = "none";
  playing = true;
  playerSection.classList.add("player-hover");
};

const playerSection = document.querySelector(".player");
const playerWeapon = document.querySelectorAll(".player button");
const computerWeapon = document.querySelectorAll(".computer button");
const playButton = document.querySelector("#play");
const resultIcon = document.querySelector(".result i");
const playerScore = document.querySelector("#scorePlayer");
const computerScore = document.querySelector("#scoreComputer");

let playing = false;

playButton.addEventListener("click", startGame);
playerWeapon.forEach((btn) => btn.addEventListener("click", playRound));
startGame();
