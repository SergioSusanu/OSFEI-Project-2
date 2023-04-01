
var score = 0;
const won="USER WINS"; lost = "COMP WINS"; draw = "DRAW";

//Handlers for html elements
const scoreBoard =  document.getElementById("player-score");
const controlPanel = document.getElementById("control-panel");
const resultInfoButton = document.getElementById("result-info-button");
const imgCompMove = document.getElementById("img-comp-move");
const imgPlayerMove = document.getElementById("img-player-move");


//Event listeners
document.getElementById("paper-card").addEventListener("click", card1Click);
document.getElementById("rock-card").addEventListener("click",card2Click);
document.getElementById("scissors-card").addEventListener("click",card3Click);
document.getElementById("play-again").addEventListener("click", playAgainClick);

function card1Click() { play(1);}

function card2Click() { play(2);}

function card3Click() { play(3);}

function playAgainClick(){ controlPanel.style.display = none;}

// 1 is paper 
// 2 is rock 
// 3 is scissors
function play(playerMove){
    let result;
    const compMove =  Math.floor(Math.random() * (3)) + 1;
    if (playerMove == compMove) result = draw;
    else if (playerMove == 1) 
        {compMove == 2 ? result = won : result = lost }
    else if (playerMove == 2)
        {compMove == 1 ? result = lost : result = win}
    else if (playerMove == 3)
        {compMove == 1 ? result = win : result = lost}

    if (result == won) increaseScore();
    displayResults(playerMove, compMove, result);
}

function increaseScore(){
    scoreBoard.innerHTML = ++score;
}

function fetchImage(n){
    let source = "images/paper.png";
    if (n==2) source =  "images/rock.png";
    else if (n==3) source = "images/scissors.png";
    return source;
}

function displayResults(pMove, cMove, res){
 controlPanel.style.display = "block";
 resultInfoButton.innerHTML = res;
 imgCompMove.src = fetchImage(cMove);
 imgPlayerMove.src = fetchImage(pMove);
}
