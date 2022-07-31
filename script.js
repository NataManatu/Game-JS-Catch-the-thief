let buttonStart = document.getElementById("button-start")

function startGame() {
    gameLoop();
}

buttonStart.addEventListener("click", startGame)

let loops = 0
function gameLoop() {
    loops++;
    if (loops < 12) {
        setTimeout(gameLoop, 3000);
    }
    else{
        alert("game over!");
    }

}