let buttonStart = document.getElementById("button-start")

function startGame() {
    gameLoop();
}
buttonStart.addEventListener("click", startGame)
function gameLoop() {
    alert("game over!");
    setTimeout(gameLoop, 3000);
}