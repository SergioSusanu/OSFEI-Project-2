
var score = 0; playOn=true; helpOn=false;
const won="USER WINS"; lost = "COMP WINS"; draw = "DRAW";

//Handlers for html elements
const scoreBoard =  document.getElementById("player-score");
const controlPanel = document.getElementById("control-panel");
const resultInfoButton = document.getElementById("result-info-button");
const imgCompMove = document.getElementById("img-comp-move");
const imgPlayerMove = document.getElementById("img-player-move");

//Event listeners
document.getElementById("paper-card").addEventListener("click", () => play(1));
document.getElementById("rock-card").addEventListener("click",() => play(2));
document.getElementById("scissors-card").addEventListener("click",() => play(3));
document.getElementById("play-again").addEventListener("click", playAgainClick);
document.getElementById("btn-start-game").addEventListener("click", (e) => {
    const btn = e.target;
    btn.innerHTML = "Loading."
    myInterval = setInterval(()=>{
        btn.innerHTML = btn.innerHTML + '.';
    }, 250);

    setTimeout(()=>{
        clearInterval(myInterval);
        document.getElementById('loader').style.display = 'none';
        document.getElementById('game-content').style.display = 'block';

    },1500)
});

document.getElementById("help-button").addEventListener("click", () => {
    const helpCard = document.getElementById("info-card");
    (helpOn) ? helpCard.style.display = 'none' : helpCard.style.display = 'grid';
    helpOn = !helpOn;
});

function playAgainClick() { 
    controlPanel.style.display = 'none';
    playOn = true;
}

// 1 is paper 
// 2 is rock 
// 3 is scissors
function play(playerMove){
    if (!playOn){
        alert('Hit Play again to launch a new game')
        return
    }
    let result;
    const compMove =  Math.floor(Math.random() * (3)) + 1;
    if (playerMove == compMove) result = draw;
    else if (playerMove == 1) 
        {compMove == 2 ? result = won : result = lost }
    else if (playerMove == 2)
        {compMove == 1 ? result = lost : result = won}
    else if (playerMove == 3)
        {compMove == 1 ? result = won : result = lost}

    if (result == won) increaseScore();
    displayResults(playerMove, compMove, result);
    playOn = false;
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
