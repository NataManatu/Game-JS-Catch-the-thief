let buttonStart = document.getElementById("button-start")

function startGame() {
    gameLoop();
}

buttonStart.addEventListener("click", startGame)

let loops = 0;
let peopleVisible = false

function gameLoop() {
    peopleVisible = !peopleVisible
    loops++;
    if (loops < 12) {
        setTimeout(gameLoop, 3000);
    }
    else {
        alert("game over!");
    }
}
function flashCharacters() {
    let board = document.getElementById("board");
    let classToSet = "";

}