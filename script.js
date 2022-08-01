let buttonStart = document.getElementById("button-start")

function startGame() {
    gameLoop();
}

buttonStart.addEventListener("click", startGame)

let loops = 0;
let peopleVisible = false
let gameScore = 0;


function gameLoop() {
    peopleVisible = !peopleVisible;
    creatCharacters();
    loops++;
    if (loops < 16) {
        setTimeout(gameLoop, 2000);
    }
    else {
        alert("твой счет " + gameScore);
    }
}

function creatCharacters() {
    let board = document.getElementById("board")
    if (peopleVisible) {
        classToSet = "character visible";
    }
    else {
        classToSet = "character hidden ";
    }
    for (let index = 0; index < 8; index++) {
        board.children[index].className = classToSet;
        board.children[index].onclick = function () {
            gameScore += -2;
        }
    }
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    board.children[randomNumber - 1].onclick = function () {
        gameScore++;
    }
    board.children[randomNumber - 1].className = classToSet + " thief"
}



