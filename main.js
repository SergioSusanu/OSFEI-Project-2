//variables
var score = 0;
var playOn = true;
const images = ["paper", "rock", "scissors"];
const outcomes = { won: "USER WINS", lost: "COMP WINS", draw: "DRAW" };

//Handlers for HTML elements
const scoreBoard = document.getElementById("player-score");
const controlPanel = document.getElementById("control-panel");
const resultInfoButton = document.getElementById("result-info-button");
const imgCompMove = document.getElementById("img-comp-move");
const imgPlayerMove = document.getElementById("img-player-move");
const helpCard = document.getElementById("info-card");

//Event listeners
document.getElementById("paper-card").addEventListener("click", () => play(1));
document.getElementById("rock-card").addEventListener("click", () => play(2));
document
  .getElementById("scissors-card")
  .addEventListener("click", () => play(3));
document.getElementById("play-again").addEventListener("click", playAgainClick);
document.getElementById("btn-start-game").addEventListener("click", (e) => {
  const btn = e.target;
  btn.innerHTML = "Loading.";
  myInterval = setInterval(() => {
    btn.innerHTML += ".";
  }, 250);
  setTimeout(() => {
    clearInterval(myInterval);
    document.getElementById("loader").style.display = "none";
    document.getElementById("game-content").style.display = "block";
  }, 1500);
});

document.getElementById("help-button").addEventListener("click", () => {
  helpCard.classList.toggle("hidden");
});

//Play logic: 1 is paper, 2 is rock, 3 is scissors
function playAgainClick() {
  controlPanel.style.display = "none";
  playOn = true;
}

function play(playerMove) {
  if (!playOn) {
    alert("Hit Play again to launch a new game");
    return;
  }
  const compMove = Math.floor(Math.random() * 3) + 1;

  const result = figureOutWinner(playerMove, compMove);

  if (result == outcomes.won) increaseScore();
  displayResults(playerMove, compMove, result);
  playOn = false;
}

function figureOutWinner(playerMove, compMove) {
  if (playerMove == compMove) return outcomes.draw;
  else if (
    (playerMove == 1 && compMove == 2) ||
    (playerMove == 2 && compMove == 3) ||
    (playerMove == 3 && compMove == 1)
  )
    return outcomes.won;
  return outcomes.lost;
}

function increaseScore() {
  scoreBoard.innerHTML = ++score;
}

function displayResults(pMove, cMove, result) {
  controlPanel.style.display = "block";
  resultInfoButton.innerHTML = result;
  imgCompMove.src = fetchImage(cMove);
  imgPlayerMove.src = fetchImage(pMove);
}

function fetchImage(n) {
  return `images/${images[n - 1]}.png`;
}
